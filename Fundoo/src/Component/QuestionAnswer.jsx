import React, { Component } from "react";
import { Paper, Button, Divider } from "@material-ui/core";
import "./QuestionAnswer.css";
import FroalaEditor from "react-froala-wysiwyg";
import {
  getNoteDetails,
  AddQuesion,
  ReplyQuesion
} from "../UserServices/noteService";
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
      message: "",
      reply: true,
      replyButton: true,
      replyButtonMain: true,
      questionArrays: [],
      answerArr: [],
      answerArray: "",
      FroalaEditor: true,
      idArrays: []
    };
  }
  handleReplyButtonMain = () => {
    this.setState({ replyButtonMain: !this.state.replyButtonMain });
  };

  handleReplyButton = () => {
    this.setState({ replyButton: !this.state.replyButton, message: " " });
  };
  componentDidMount() {
    let id = this.props.match.params;
    getNoteDetails(id)
      .then(async response => {
        console.log("question Note DATA==>", response.data.data.data[0]);
        // console.log(
        //   "questions message",
        //   response.data.data.data[0].questionAndAnswerNotes[0].message
        // );
        await this.setState({
          title: response.data.data.data[0].title,
          description: response.data.data.data[0].description
          // answer: response.data.data.data[0].questionAndAnswerNotes
        });
        await this.setState({
          questionArrays:
            response.data.data.data[0].questionAndAnswerNotes[0].message
        });
        await this.setState({
          answerArr:
            response.data.data.data[0].questionAndAnswerNotes[0].message
        });
        await this.setState({
          idArrays: response.data.data.data[0].questionAndAnswerNotes[0].id
        });

        // await this.setState({
        //   answerArray:
        //     response.data.data.data[0].questionAndAnswerNotes[0].message
        // });
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
    this.setState({
      message: this.state.message,
      FroalaEditor: !this.state.FroalaEditor
    });
    var data = {
      message: this.state.message,
      notesId: this.props.match.params.id
    };
    AddQuesion(data)
      .then(async response => {
        await this.setState({
          que: response.data.data.details,
          message: this.state.message
        });
        console.log("response in add question ", response);
      })
      .catch(error => {
        console.log("error in add question ", error);
      });
  };
  handleReplyAnswer = () => {
    console.log("messageAnswer", this.state.message);
    this.setState({
      message: this.state.message,
      FroalaEditor: !this.state.FroalaEditor
    });
    var data = {
      message: this.state.message,
      id: this.state.idArrays
    };
    // console.log("object this.state.idArrays", this.state.idArrays);
    ReplyQuesion(data)
      .then(async response => {
        await this.setState({
          que: response.data.data.details,
          message: this.state.message
        });
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
            {this.state.questionArrays.length ? (
              <div>
                <IconButton>
                  <PersonOutlineTwoToneIcon />
                </IconButton>
                {localStorage.getItem("firstName") +
                  " " +
                  localStorage.getItem("lastName")}
                <IconButton onClick={this.handleReplyButtonMain}>
                  <ReplyIcon style={{ marginLeft: "2%" }} />
                </IconButton>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <ArrowRightIcon fontSize="large" />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.questionArrays
                    }}
                  />
                </div>
                <div style={{ padding: "15px" }}>
                  {this.state.replyButtonMain ? null : (
                    <div>
                      <FroalaEditor
                        tag="textarea"
                        config={this.config}
                        model={this.state.message}
                        onModelChange={this.handleModelChange}
                      />
                      <div>
                        <Button onClick={this.handleReplyAnswer}>
                          Submit-Answer
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div>
                {this.state.FroalaEditor ? (
                  <div style={{ padding: "15px" }}>
                    <FroalaEditor
                      tag="textarea"
                      config={this.config}
                      model={this.state.message}
                      onModelChange={this.handleModelChange}
                    />
                    <Button onClick={this.handleSubmitAnswer}>
                      Submit-Question
                    </Button>
                  </div>
                ) : null}
              </div>
            )}

            <div className="reply">
              {this.state.reply ? (
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button onClick={this.handleReply}>View Reply</Button>
                </div>
              ) : (
                <div>
                  <div>
                    {this.state.questionArrays.length ? (
                      <div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                          }}
                        >
                          <div>
                            <IconButton>
                              <PersonOutlineTwoToneIcon />
                            </IconButton>
                            {localStorage.getItem("firstName") +
                              " " +
                              localStorage.getItem("lastName")}
                            <IconButton onClick={this.handleReplyButton}>
                              <ReplyIcon style={{ marginLeft: "2%" }} />
                            </IconButton>
                          </div>
                          <div>
                            <Button onClick={this.handleReply}>
                              Hide Reply
                            </Button>
                          </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <ArrowRightIcon fontSize="large" />
                          <div
                            dangerouslySetInnerHTML={{
                              __html: this.state.answerArray
                            }}
                          />
                        </div>
                        <div style={{ padding: "15px" }}>
                          {this.state.replyButton ? null : (
                            <div>
                              <FroalaEditor
                                tag="textarea"
                                config={this.config}
                                model={this.state.message}
                                onModelChange={this.handleModelChange}
                              />
                              <div className="submitQuestion">
                                <Button onClick={this.handleReplyAnswer}>
                                  Submit-Answer
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div>
                        {this.state.FroalaEditor ? (
                          <div style={{ padding: "15px" }}>
                            <FroalaEditor
                              tag="textarea"
                              config={this.config}
                              model={this.state.message}
                              onModelChange={this.handleModelChange}
                            />
                            <div>
                              <Button onClick={this.handleReplyAnswer}>
                                Submit-Answer
                              </Button>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default QuestionAnswer;
