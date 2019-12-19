import React, { Component } from "react";
import { Paper, Button, Divider } from "@material-ui/core";
import "./QuestionAnswer.css";
import FroalaEditor from "react-froala-wysiwyg";
import { getNoteDetails } from "../UserServices/noteService";
import TextField from "@material-ui/core/TextField";

class QuestionAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      question: "",
      answer: "",
      reply: true
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    console.log("id in quesion", id);
    getNoteDetails(id)
      .then(response => {
        console.log("question Note DATA==>", response.data.data.data[0]);
        this.setState({
          title: response.data.data.data[0].title,
          description: response.data.data.data[0].description
        });
      })
      .catch(err => {
        console.log("questionS note ERROR==>", err);
      });
  }
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
            <p>
              Make sure what you’re asking is unique, concise, and phrased like
              a question.
            </p>
          </div>

          <div className="froalaEditor">
            <FroalaEditor
              tag="textarea"
              config={this.config}
              model={this.state.model}
              onModelChange={this.handleModelChange}
            />
          </div>
          <div className="submitQuestion">
            <Button>Submit-Question</Button>
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
