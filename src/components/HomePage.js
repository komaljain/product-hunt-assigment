import React  from "react";
import API from "../network/API";
import {withRouter } from "react-router-dom"
import { Container, CircularProgress } from "@material-ui/core";
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
  } 

  render() {
    return (
      <React.Fragment>
        <Container maxWidth="md">
          <ProductHuntToolbar isHomePage={true} pageName={"ProductHunt"}></ProductHuntToolbar>
          {this.state.msgHandler}
          <div className="right-align"><DatePicker onChange={this.onDateChange} value={this.state.selectedDate} /></div>
          {this.state.isLoading && <CircularProgress className="progress" />}
          <ProductHuntList displayList={this.state.postsList} />
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(HomePage);