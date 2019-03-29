import  React , {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Navbar from './components/common/navbar.js';
import Email from './components/email/email.js';


class App extends Component{
    render(){
        return (
            <Provider store={store}>
              <Router>
                  <div className="app-container">
                     <Navbar />
                     <Email />
                  </div>
              </Router>
            </Provider>
        )
    }
}

export default App;