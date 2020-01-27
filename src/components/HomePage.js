import * as React from "react";
import API from "../network/API";

class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        msgHandler: null
      };
    }

    componentDidMount() {
        this.getAccessToken();
    }

    getAccessToken() {
      let currentComponent = this;
      API.get('posts', (response) => {
        currentComponent.setState({
          postsList: response.data.posts
        });
      }, 
      (error) => {
        currentComponent.setState({
            msgHandler: error.msgHandler
        })
      });
    }

    render() {
        return (
          <div>
            <div>{this.state.msgHandler}</div>
            <div>HomePage</div>
          </div>
        );
    }
}

export default HomePage;