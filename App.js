import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Navbar from "./Navbar";
import TweetFeed from "./TweetFeed";
import RuleList from "./RuleList";

import "./main.css"

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="introduction"></div>

        <h1 className="ui header">
          <div className="content">
            Real Time Tweet Disaster Classifier
            <div className="sub header">Powered by MarkovML - GoodForAI</div>
          </div>
        </h1>

        <div className="ui container">
          <BrowserRouter>

          <Navbar/> 
            <Routes>
              <Route path="/" element={<RuleList />}></Route>
              <Route path="/rules" element={<RuleList />}></Route>
              <Route path="/tweets" element={<TweetFeed />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;