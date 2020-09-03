import React, { useState }from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@material-ui/core';
// import { Avatar} from "@material-ui/core";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");

  return <div className="tweetBox">
    <form>
    <div className="tweetBox__input">
      <Avatar src="https://avatars3.githubusercontent.com/u/48948074?s=460&u=d8d5a56c477f72be28e39cd0f40b51243180458a&v=4" />
      <input 
      onChange={e => setTweetMessage(e.target.value)}
      value={tweetMessage} 
      placeholder="What's going on?" 
      type="text" />
    </div>
    <input 
    className="tweetBox__imageInput" 
    placeholder="Optional: Enter image URL" 
    type="text" 
    />
    <Button className="tweetBox__tweetButton">Tweet</Button>
    </form>
  </div>
  
}

export default TweetBox
