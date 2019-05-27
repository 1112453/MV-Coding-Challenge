import React, { Component } from "react";
import { Card, CardContent, Typography, IconButton } from "@material-ui/core/";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons/";
export default class CardItem extends Component {
    constructor(props) {
      super(props);
    }
  
    componentDidMount() {}
  
    render() {
      const {item, votePostUp, votePostDown} = this.props;
      return (
            <Card style={{margin: 10, display: 'flex'}}>
              <div style={{minWidth: 50, flex: 1, alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                <IconButton style={{ outline: "none" }} onClick={()=>{votePostUp(item.id)}}>
                    <ArrowUpward color="primary"/>
                </IconButton>
                <div>{item.vote}</div>
                <IconButton style={{ outline: "none" }} onClick={()=>{votePostDown(item.id)}}>
                    <ArrowDownward color="secondary"/>
                </IconButton>
              </div>
              <div style={{flex: 100}}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                <div dangerouslySetInnerHTML={{ __html: item.description.replace(/\n/g, '')}} />
              </Typography>
            </CardContent>
            </div>
          </Card>
      );
    }
  }
  