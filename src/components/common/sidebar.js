import React, {Component} from 'react';
import './common.css';
import { spamEmail, deleteEmail } from '../../actions/emailActions';
import {connect} from 'react-redux';





class Sidebar extends Component{
    constructor(props){
        super(props);
        this.spamClick = this.spamClick.bind(this);
        this.inboxClick = this.inboxClick.bind(this);
        this.deletedClick = this.deletedClick.bind(this);
    }

    spamClick(){
        this.props.changeSidebarVal({spam:true,del:false,inbox:false})
    }

    inboxClick(){
      this.props.changeSidebarVal({spam:false,del:false,inbox:true})
  }

  deletedClick(){
    this.props.changeSidebarVal({spam:false,del:true,inbox:false})
  }


    render(){
      const {emails,spamEmails,deletedEmails} = this.props;
        return(
            <div className="sidebar-container">
             <div className="sidebar-header">Folders</div>
             <div className="d-flex flex-column sidebar-item-container">
             <div className="d-flex justify-content-between sidebar-item">
               <div className="sidebar-item-text" onClick={this.inboxClick}>Inbox</div>
               <div className="email-count">{emails.length}</div>
             </div>
             <div className="d-flex justify-content-between sidebar-item">
               <div className="sidebar-item-text" onClick={this.spamClick}>spam</div>
               <div className="email-count">{spamEmails.length}</div>
             </div>
             <div className="d-flex justify-content-between sidebar-item">
               <div className="sidebar-item-text" onClick={this.deletedClick}>Deleted Items</div>
               <div className="email-count">{deletedEmails.length}</div>
             </div>
             <div className="d-flex justify-content-between sidebar-item">
               <div className="sidebar-item-text">Custom Folder</div>

             </div>
             </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
  emails:state.email.emails,
  spamEmails:state.email.spamEmails,
  deletedEmails:state.email.deletedEmails
})

export default connect(mapStateToProps,{})(Sidebar);