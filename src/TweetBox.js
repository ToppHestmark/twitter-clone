import React, { useState }from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Ola Nordmann',
      username: 'olanordmann',
      verified: true,
      text: tweetMessage,
      tweetImage: tweetImage,
      avatar: "https://techcrunch.com/wp-content/uploads/2019/09/twitter-hidden-replies1.png?w=1390&crop=1"
    });

    setTweetMessage("");
    setTweetImage("");
  };

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
    value={tweetImage}
    onChange={e => setTweetMessage(e.target.value)}
    className="tweetBox__imageInput" 
    placeholder="Optional: Enter image URL" 
    type="text" 
    />
    <Button 
    onClick={sendTweet}
    type="submit" 
    className="tweetBox__tweetButton"
    >Tweet</Button>

    </form>
  </div>
  
}

export default TweetBox
