import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import "./DisplayAllNotes.css";
import Reminder from "./Reminder";
import More from "./More";
import { Tooltip } from "@material-ui/core";
import ColorPalette from "./ColorPalette";
import ArchiveNote from "./ArchiveNote";
import "./Masonry.css";
class SearchNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [this.props.data]
    };
  }

  render() {
    console.log("object", this.state.data);
    return (
      <div>
        {this.state.data.length > 0 ? (
          <div>
            {this.state.data.map(data => (
              <div className="allNotes">
                <Card style={{ width: "350px", backgroundColor: data.color }}>
                  <div>
                    <TextField
                      value={data.title}
                      InputProps={{
                        disableUnderline: true
                      }}
                      style={{ paddingLeft: "15px" }}
                    />
                    <br />
                    <TextField
                      value={data.description}
                      InputProps={{
                        disableUnderline: true
                      }}
                      style={{ paddingLeft: "15px" }}
                    />
                  </div>

                  <div style={{ fontSize: "small" }}>
                    <div className="noteLogo">
                      <Reminder />
                      <Tooltip title="Change color">
                        <ColorPalette />
                      </Tooltip>
                      <ArchiveNote />
                      <More />
                    </div>
                  </div>
                </Card>
                <br />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default SearchNote;
