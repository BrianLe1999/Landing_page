import React from 'react';
import '../Features/features.css';
import { Icon } from '@iconify/react'; // using icons from iconify

import screenDesktopIcon from '@iconify/icons-cil/screen-desktop';
import layersIcon from '@iconify/icons-simple-line-icons/layers';
import checkCircleIcon from '@iconify/icons-cil/check-circle';


const features = [
    {icon: screenDesktopIcon, theme: "Fully Responsive", description: "This theme will look great on any device, no matter the size!"},
    {icon: layersIcon, theme: "Bootstrap 4 Ready", description: "Featuring the latest build of the new Bootstrap 4 framework!"},
    {icon: checkCircleIcon, theme:"Easy to use", description: "Ready to use with your own content, or customize the source files!"}
];
function Features() {
    return (
        <div className="features">
          {features.map((item, index) =>
            <div className="feature" key={index}>
              <Icon className="icon" icon={item.icon}/>
              <p className="theme">{item.theme}</p>
              <p className="description">{item.description}</p>
            </div>)
            }
        </div>
    );
}

export default Features;
