import logo from './logo.svg';
import React from "react";
import {Chatbot} from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';


import './App.css';

import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import config from './chatbot/config';


function App() {
  return (
    <div className="App">
      <div style={{ maxWidth:"300px" }}>
        <Chatbot config={config} 
        actionProvider={ActionProvider} 	    
        messageParser={MessageParser} 
        />
      </div>
    </div>
  );
}


export default App;
