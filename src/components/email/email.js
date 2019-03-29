import React, {Component} from 'react';
import Sidebar from '../common/sidebar.js';
import '../common/common.css';
import {connect} from 'react-redux';
import EmailItem from './emailItem'



class Email extends Component{
    constructor(props){
        super(props);
        this.state = {
            inbox:true,
            spam:false,
            del:false,
            content:''

        }
        this._getEmails = this._getEmails.bind(this);
        this._getSpamEmails = this._getSpamEmails.bind(this);
        this._getDeletedEmails = this._getDeletedEmails.bind(this);
        this.setSidebarItem = this.setSidebarItem.bind(this);
        this.setContent = this.setContent.bind(this);
    }

    setContent(val){
        this.setState(val);
    }

    _getEmails(){
        const {emails} = this.props;
        return emails.length > 0 ? (emails.map(email=>(
            <EmailItem type="inbox" key={email.mId} email={email}  setEmailContent={this.setContent}/>
        ))) : (
            <div className="no-inbox-email">No Email in your inbox</div>
        )
    }

    _getSpamEmails(){
        const {spamEmails} = this.props;
        return spamEmails.length > 0 ? (spamEmails.map(email=>(
            <EmailItem type="spam" key={email.mId} email={email} setEmailContent={this.setContent} />
        ))) : (
            <div className="no-inbox-email">No Email in your spam</div>
        )
    }

    _getDeletedEmails(){
        const {deletedEmails} = this.props;
        return deletedEmails.length > 0 ? (deletedEmails.map(email=>(
            <EmailItem type="delete" key={email.mId} email={email} setEmailContent={this.setContent}/>
        ))) : (
            <div className="no-inbox-email">No Email in your deleted folder</div>
        )
    }

    setSidebarItem(val){
        this.setState(val);
    }


    render(){
        console.log(this.props.emails);
        const {inbox,spam,del} = this.state;
        return(
            <div className="d-flex email-container">
             <div className="sidebar-box">
              <Sidebar changeSidebarVal={this.setSidebarItem}/>
             </div>
             <div className="email-item-box">
              {inbox && this._getEmails()}
              {spam && this._getSpamEmails()}
              {del && this._getDeletedEmails()}
             </div>
             <div className="email-item-content-box">
               {this.state.content}
             </div>
            </div>
        )
    }
}


const mapStateToProps = state =>({
    emails:state.email.emails,
    spamEmails:state.email.spamEmails,
    deletedEmails:state.email.deletedEmails
})

export default connect(mapStateToProps,{})(Email);