import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from "@material-ui/core/";
import { Create } from "@material-ui/icons/";
import * as constant from "../../constant/constant";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render() {
    const { history } = this.props;
    return (
      <AppBar
        style={{
          position: "fixed",
          backgroundColor: constant.mainBackgroupColor,
          height: constant.mainHeaderHeight
        }}
        className="appBar"
      >
        <Toolbar style={{ minHeight: "100%", padding: 0 }}>
          <Button
            style={{ color: "white", outline: "none" }}
            onClick={() => {
              history.push("/");
            }}
          >
            <Typography
              variant="h6"
              color="inherit"
              className="flex"
              style={{ flex: 1 }}
            >
              MV Coding Challenge
            </Typography>
          </Button>
          <div style={{ flex: 1 }} />
          {history.location.pathname === "/" && (
            <IconButton
              style={{ outline: "none" }}
              color="inherit"
              aria-label="Add"
              onClick={event => {
                this.props.history.push("/create-post");
              }}
            >
              <Create style={{ fontSize: 20 }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}
