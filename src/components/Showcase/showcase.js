import React from 'react';
import '../Showcase/showcase.css';
import responsive_src from "../static/responsive.jpg";
import bootstrap_src from "../static/bootstrap.jpg";
import easy_to_use_src from "../static/easy-to-use.jpg";

const showcase = [
    {src: responsive_src,
    theme: "Fully Responsive Design",
    description: "When you use a theme created by Start Bootstrap \
    , you know that the theme will look great on any device, \
    whether it's a phone, tablet, or desktop the page will behave responsively!"},

    {src: bootstrap_src,
    theme: "Updated For Bootstrap 4",
    description: "Newly improved, and full of great utility classes, Bootstrap 4 \
     is leading the way in mobile responsive web development! \
     All of the themes on Start Bootstrap are now using Bootstrap 4!"},

    {src: easy_to_use_src,
    theme:"Easy to Use & Customize",
    description: "Landing Page is just HTML and CSS with a splash of SCSS for users \
    who demand some deeper customization options. Out of the box, just add your content \
    and images, and your new landing page will be ready to go!"}

];


function Showcase(props){

    return (
      <div className="showcase">
        {showcase.map((item, index) =>
          <div className="showcase-item" key={index}>
            <img className = "showcase-img" style ={{order: `${1 - index % 2}`}} src={item.src} alt= {item.theme}/>
            <div className="showcase-text" style ={{order: `${index % 2}`}}>
              <p className="showcase-theme">{item.theme}</p>
              <p className="showcase-description">{item.description}</p>
            </div>
          </div>)
        }
      </div>
    );
}

export default Showcase;
