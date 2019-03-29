import React, {Component} from 'react';
import '../common/common.css';
import {connect} from 'react-redux';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {deleteEmail,spamEmail} from '../../actions/emailActions';




class EmailItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            dropdownOpen:false
        }
        this.setContent = this.setContent.bind(this);
        this.toggle = this.toggle.bind(this);
        this.deleteEmail = this.deleteEmail.bind(this);
        this.spamEmail = this.spamEmail.bind(this);
    }

    deleteEmail(){
        const {email} = this.props;
        this.props.deleteEmail(email);
    }

    spamEmail(){
        const {email} = this.props;
        this.props.spamEmail(email);
    }

    toggle(){
        this.setState({dropdownOpen:!this.state.dropdownOpen})
    }

    setContent(){
        const {email} = this.props;
        this.props.setEmailContent({content:email.content})
    }


    render(){
        const {email,type} = this.props;
        console.log(email);
        return(
            <div className="d-flex justify-content-between email-item-container">
             <div>
             <div className="email-item-subject">
               {email.subject}
             </div>
             <div className="email-item-content" onClick={this.setContent}>
              {email.content}
             </div>
             </div>
             <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle >
        <i class="material-icons" onClick={this.toggle}>more_vert</i>
        </DropdownToggle>
          <DropdownMenu>
            {type === "inbox" && <div>
              <DropdownItem onClick={this.spamEmail}>Spam</DropdownItem>
              <DropdownItem onClick={this.deleteEmail}>Delete</DropdownItem>
             </div>
         }
         {type === "spam" && <DropdownItem onClick={this.deleteEmail}>Delete</DropdownItem>}
        </DropdownMenu>
      </Dropdown>
            </div>
        )
    }
}


const mapStateToProps = (state) =>({
    emails:state.email.emails
})

export default connect(mapStateToProps,{deleteEmail,spamEmail})(EmailItem);