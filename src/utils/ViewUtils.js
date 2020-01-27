import React from "react";
import MessageHandler from '../uiutils/MessageHandler';

export const ViewUtils = {
    createMessageHandler,
    createMsgHandlerCustomView
};

function createMessageHandler(message, msgResponse) {
    return <MessageHandler message={message} messageResponse={msgResponse}/>
}

function createMsgHandlerCustomView(message, msgResponse, customView) {
    return <MessageHandler message={message} messageResponse={msgResponse} customView={customView} />
}