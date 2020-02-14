import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Main } from '../components/Main/Main';
import { ConversationDiv } from '../components/Conversation/Conversation';
import { Toolbox } from '../components/Toolbox/Toolbox';
import { MessageDiv } from '../components/Message/MessageDiv';

export class Conversation extends React.Component{
    constructor(props) {
        super(props);

        // Posts Service Object
        this.services = this.props.services;
        this.state = {
            status: 'open',
            messages: [],
            conversations: [],
            userId: 1,
            conversation: null,
            messageId: null,
            message: null,
            comments: [],
            comment: null
        }

    }
    
    componentDidMount() {
        // console.log("[ComponentDidMount]Conversation.js");
        this.getConversations(this.state.status);
    }

    componentDidUpdate() {
        // console.log("[ComponentDidUpdate]Conversation.js");
    }

    /* 
        get all conversations handler
    */
    getConversations = (status) => {
        this.setState({ status });
        this.services
            .conversations
            .getConversationsByStatus(status)
            .then((conver) => {
                this.setState((props, state) => ({ conversations: conver }))
            });
    }
    
    /**
     * get a conversation
     */
    
    /**
     * get all messages by conversation id
     * @param id
     */
    getConversation = (id) => {
        this.services
            .conversations
            .getConversationsById(id).then((conversation) => {
                this.setState({ conversation });
                this.getMessages(id);
            });
        
    }

    /**
     * get all messages by conversation Id
     * @param conversationId
     */
    getMessages = (conversationId) => {
        this.services
            .messages.getMessages(conversationId)
            .then((messages) => {
                this.setState({ messages })
            });
    }

    /**
     * Save a message handler
     */

    /** 
     * Save a comment
    */
    
    /**
     * get all comment by messageId
     * @param messageId
     */

    render() {
        
        return (
            <Main>
                <Row bg={"primary"}>
                    <Col sm={"12"}>
                        <h4 className={"pl-3 pt-2 pb-2 border border-left-0 border-right-0"}>Conversation</h4>
                    </Col>
                </Row>
                <Row className="no-gutter">
                    <Col className="no-gutter pr-0" lg="3">
                        <ConversationDiv
                            status={this.state.status} data={this.state.conversations} getConversations={this.getConversations}
                            getConversation = {this.getConversation}
                        />
                    </Col>
                    <Col className="no-gutter pt-0" lg="9">
                        <Row className="no-gutter pt-0"><Toolbox /></Row>
                        <Row >
                            <Col lg="8">
                                
                                <MessageDiv
                                    conversation={this.state.conversation}
                                    messages={this.state.messages}
                                    userId={this.state.userId}
                                />
                            </Col>
                            <Col lg="4">comments</Col>
                        </Row>
                    </Col>
                </Row>
            </Main>
        )
    }

}


export default Conversation;