import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Tweet = ({ json }) => {
  const { id } = json.data;

  const options = {
    cards: "hidden",
    align: "center",
    width: "550",
    conversation: "none",
  };

  return (
    <>
    <TwitterTweetEmbed options={options} tweetId={id} />
    <h1 className="disaster-percentage">Disaster Level: {Math.round(json.data.disaster * 10000) / 100} %</h1>
    </>
  
  );
};

export default Tweet;