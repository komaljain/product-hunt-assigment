import React from "react";
import { withRouter } from "react-router-dom";
import { Container, CircularProgress } from "@material-ui/core";
import API from "../network/API";
import ProductHuntList from "./ProductHuntList";
import ProductHuntToolbar from "./ProductHuntToolbar";

class MyUpVotes extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        msgHandler: null,
        votesList: [],
        isLoading: false
      };
    }
  
    componentDidMount() {
      this.getVotesForUser("2352271");
    }
  
    getVotesForUser(userid) {
      let currentComponent = this;
      currentComponent.setState({isLoading: true, postsList: [], msgHandler:null});
      API.get('users/' + userid + '/votes', (response) => {
        currentComponent.setState({
          votesList: response.data.votes,
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
  
    render() {
      return (
        <React.Fragment>
          <Container maxWidth="md">
            <ProductHuntToolbar isHomePage={false} pageName={"My UpVotes"}></ProductHuntToolbar>
            {this.state.msgHandler}
            {this.state.isLoading && <CircularProgress className="progress" />}
            <ProductHuntList displayList={this.state.votesList} isVotesList={true}></ProductHuntList>
          </Container>
        </React.Fragment>
      );
    }
  }
  
  export default withRouter(MyUpVotes);