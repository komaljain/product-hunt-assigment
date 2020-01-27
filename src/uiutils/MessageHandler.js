import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

class MessageHandler extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            showMessage: true,
        }
        this.handleMsgDismiss = this.handleMsgDismiss.bind(this);
    }

    handleMsgDismiss() {
        this.setState({showMessage: false});
    }

    componentWillReceiveProps() {
        this.setState({
            showMessage: true
        });
    }

    render() {
        return(
            <div>
            {this.state.showMessage && 
                <Alert severity={this.props.messageResponse}
                    onClose={this.handleMsgDismiss}>
                    <AlertTitle>{this.props.message}</AlertTitle>
                    {this.props.customView}
                </Alert>}
            </div>
        );
    }
}

export default MessageHandler;