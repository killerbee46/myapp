
import React from 'react';
import './App.css';
import Message from './Message';
import MessageArea from './MessageArea';
import SenderProfile from './SenderProfile';
import UserProfile from './UserProfile';
import NavigationBar from './NavigationBar';
import Calling from './Calling';
import VideoCalling from './VideoCalling';
import SenderInformation from './SenderInformation';
import VideoCall from './VideoCall';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
       <NavigationBar/>
        <Message />
        <Switch> 
          <Route path="/user-profile">
            <UserProfile />
           </Route>
           <Route path="/sender-profile">
            <SenderProfile />
          </Route>
          <Route path="/call">
              <Calling />
            </Route> 
            <Route path="/video-call">
              <VideoCalling />
            </Route>
            <Route path="/VideoCall">
              <VideoCall />
            </Route>
            <Route path="/sender-info">
              <SenderInformation />
            </Route>
        </Switch>
        <MessageArea />
    </Router>
  );
}


export default App;


