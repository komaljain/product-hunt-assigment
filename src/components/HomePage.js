import React, { useState } from "react";
import API from "../network/API";
import {withRouter, Redirect, Link} from "react-router-dom"
import { Container, AppBar, Toolbar, Typography, IconButton, Box, Grid, Card, Chip, CircularProgress } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CommentIcon from '@material-ui/icons/Comment'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ViewUtils } from "../utils/ViewUtils";
import MessageResponse from "../uiutils/MessageResponse";
import { red } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import { DateUtils } from "../utils/DateUtils";
import DatePicker from 'react-date-picker';
import ProductHuntToolbar from "./ProductHuntToolbar";
import ProductHuntList from  "./ProductHuntList";
class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      msgHandler: null,
      postsList: [],
      selectedDate: new Date(),
      isLoading: false
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  componentDidMount() {
    this.getAccessToken("");
  }

  getAccessToken(daysParameter) {
    let currentComponent = this;
    currentComponent.setState({isLoading: true, postsList: [], msgHandler:null});
    API.get('posts' + daysParameter, (response) => {
      currentComponent.setState({
        postsList: response.data.posts,
        isLoading: false
      });
    },
      (error) => {
        currentComponent.setState({
          msgHandler: error.msgHandler,
          isLoading: false
        })
      });
  }

  onDateChange(date) {
    
    let currentComponent = this;
    currentComponent.setState({ selectedDate: date });
    currentComponent.getAccessToken( "?day=" + DateUtils.convertDateToFormattedDate(date, "YYYY-MM-DD"));
    <Redirect to="/myupvotes"></Redirect>
  } 

  render() {
    return (
      <React.Fragment>
        <Container fixed>
          <ProductHuntToolbar isHomePage={true} pageName={"ProductHunt"}></ProductHuntToolbar>
          {this.state.msgHandler}
          <div className="right-align"><DatePicker onChange={this.onDateChange} value={this.state.selectedDate} /></div>
          {this.state.isLoading && <CircularProgress />}
          <ProductHuntList displayList={this.state.postsList} />
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(HomePage);