import React from 'react';
import '../Stories/stories.css';
import testimony_1 from "../static/testimony-1.jpg";
import testimony_2 from "../static/testimony-2.jpg";
import testimony_3 from "../static/testimony-3.jpg";

const stories = [
    {src: testimony_1,
    name: "Margaret E.",
    testimony: "\"This is fantastic! Thanks so much guys!\""},

    {src: testimony_2,
    name: "Fred S.",
    testimony: "\"Bootstrap is amazing. I've been using it to create lots of super nice landing pages.\""},

    {src: testimony_3,
    name: "Sarah W.",
    testimony: "\"Thanks so much for making these free resources available to us!\""}
];


function Stories(props) {
    return (
      <div className="stories-component">
        <h3 className="stories-title">What people are saying...</h3>
        <div className="stories">
          {stories.map((item, index) =>
            <div className="story" key={index}>
              <img className = "user-img" src={item.src} alt= {item.name}/>
              <p className="user-name">{item.name}</p>
              <p className="user-testimony">{item.testimony}</p>
            </div>)}
        </div>
      </div>
    );
}

export default Stories;
