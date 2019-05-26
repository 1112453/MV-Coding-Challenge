import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  FormControl,
  TextField,
  FormHelperText,
  Button
} from "@material-ui/core/";
import { Create } from "@material-ui/icons/";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as constant from "../../constant/constant";

import Header from '../../component/header/';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      error: "",
      textInput: ""
    };
    this.modules = {
      toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" }
        ],
        ["link", "image", "video"],
        ["clean"]
      ],
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false
      }
    };

    this.formats = [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "video"
    ];

    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    let data = {
      title: this.state.subject,
      description: this.state.textInput,
      vote: 0
    };
    this.props.createPost(data);
    this.props.history.push("/");
  }

  componentDidMount() {}

  render() {
    const {history} = this.props;
    return (
      <div className="container">
        <div
          className="create-post"
          style={{
            paddingTop: constant.mainHeaderHeight,
            paddingBottom: constant.mainFooterHeight
          }}
        >
          <Header
            history={history}
          />
          <div style={{ marginTop: 30 }}>
            <div className="row">
              <div className="col-md-12">
                <h4>Create a post</h4>
                <hr style={{ background: "white" }} />
              </div>
            </div>
            <div
              className="row"
              style={{ background: "white", borderRadius: 5 }}
            >
              <div className="col-md-12">
                <TextField
                  label="Title"
                  placeholder="Enter title"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  required
                  error={this.state.subject === ""}
                  value={this.state.subject}
                  onChange={e => this.setState({ subject: e.target.value })}
                />
                <ReactQuill
                  theme="snow"
                  onChange={val => this.setState({ textInput: val })}
                  value={this.state.textInput}
                  modules={this.modules}
                  formats={this.formats}
                  bounds={".app"}
                  placeholder="Text (optional)"
                />
                <Button
                  variant="contained"
                  color="primary"
                  style={{ float: "right", marginTop: 10, marginBottom: 10 }}
                  onClick={this.handleButton}
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
