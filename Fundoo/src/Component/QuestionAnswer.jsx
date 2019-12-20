import React, { Component } from "react";
import { Paper, Button, Divider } from "@material-ui/core";
import "./QuestionAnswer.css";
import FroalaEditor from "react-froala-wysiwyg";
import { getNoteDetails, AddQuesion } from "../UserServices/noteService";
import TextField from "@material-ui/core/TextField";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import { IconButton } from "@material-ui/core";
import ReplyIcon from "@material-ui/icons/Reply";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
class QuestionAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      description: "",
      question: "",
      answer: [],
      meassge: "",
      reply: true,
      questionArrays: [],
      FroalaEditor: false
    };
  }
  handleFroalaEditor = () => {
    this.setState({ FroalaEditor: !this.state.FroalaEditor });
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    getNoteDetails(id)
      .then(async response => {
        console.log("question Note DATA==>", response.data.data.data[0]);
        console.log(
          "questions message",
          response.data.data.data[0].questionAndAnswerNotes[0].message
        );
        await this.setState({
          title: response.data.data.data[0].title,
          description: response.data.data.data[0].description,
          answer: response.data.data.data[0].questionAndAnswerNotes
        });
        await this.setState({
          questionArrays:
            response.data.data.data[0].questionAndAnswerNotes[0].message
        });
      })
      .catch(err => {
        console.log("question note ERROR==>", err);
      });
  }
  handleModelChange = event => {
    this.setState({ message: event });
    console.log("Message is", this.state.message);
  };

  handleSubmitAnswer = () => {
    console.log("message", this.state.message);
    this.setState({ message: this.state.message });
    var data = {
      message: this.state.message,
      notesId: this.props.match.params.id
    };
    AddQuesion(data)
      .then(async response => {
        await this.setState({ que: response.data.data.details });
        console.log("response in add question ", response);
      })
      .catch(error => {
        console.log("error in add question ", error);
      });
  };

  handleReply = () => {
    this.setState({ reply: !this.state.reply });
  };
  handleClose = () => {
    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <div className="questionPaper">
        <Paper>
          <div className="titleQuestion">
            <b>
              <TextField
                InputProps={{
                  disableUnderline: true
                }}
                value={this.state.title}
                multiline
                style={{ paddingLeft: "15px" }}
              />
            </b>
            <Button onClick={this.handleClose}>Close</Button>
          </div>

          <div className="descriptionQuestion">
            <b>
              <TextField
                InputProps={{
                  disableUnderline: true
                }}
                multiline
                value={this.state.description}
                style={{ paddingLeft: "15px" }}
              />
            </b>
          </div>
          <Divider />
          <div>
            <h2>Ask a Question </h2>
          </div>

          <div>
            <div style={{ margin: "2%" }}>
              <IconButton>
                <PersonOutlineTwoToneIcon />
              </IconButton>

              {localStorage.getItem("firstName") +
                " " +
                localStorage.getItem("lastName")}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <ArrowRightIcon fontSize="large" />
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: this.state.questionArrays }}
            />
            <ReplyIcon
              Button
              style={{ marginLeft: "2%" }}
              onClick={this.handleFroalaEditor}
            />
          </div>
          {this.state.questionArrays.length ? null : (
            <FroalaEditor
              tag="textarea"
              config={this.config}
              model={this.state.message}
              onModelChange={this.handleModelChange}
            />
          )}
          <div className="froalaEditor"></div>
          <div className="submitQuestion">
            <Button onClick={this.handleSubmitAnswer}>Submit-Question</Button>
            <div className="reply">
              {this.state.reply ? (
                <Button onClick={this.handleReply}>View Reply</Button>
              ) : (
                <Button onClick={this.handleReply}>Hide Reply</Button>
              )}
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default QuestionAnswer;
