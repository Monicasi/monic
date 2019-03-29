import  React , {Component} from 'react';
import './common.css'

class Navbar extends Component{
    render(){
        return (
            <div className="d-flex align-items-center navbar-container">
               <div className="d-flex justify-content-between navbar-search-tab">
                
               <div> <input className="search-tab-text" type="text" placeholder="Search Mail and People"/>  <i className="material-icons search-icon">search</i></div>
               
               </div>
               <div className="d-flex align-items-center right-navbar-tab">
                 <div className="add-new-item">
                 <i className="material-icons">add_circle_outline</i>
                 <div className="new-text">New</div>
                 </div>
                 <div className="read-email-item">
                 <i className="material-icons icons">drafts</i>
                 <div className="mark-all-read-text icons icons-read">Mark all as Read</div>
                 </div>
               </div>
            </div>
        )
    }
}



export default Navbar;