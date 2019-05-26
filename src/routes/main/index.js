import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Home from '../home/container/HomeContainer';
import CreatePost from '../createPost/container/CreatePostContainer';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Router>
        <div>
          <Route
            render={history => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* content */}
                <div
                  className="content"
                  style={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/create-post" component={CreatePost} />
                    <Redirect to="/" />
                  </Switch>
                </div>
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default Main;
