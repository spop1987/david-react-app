import React from "react";
import { SubHeading } from "../../components";
import { fotosHeader, awards } from "../../constants";

import './Press.css';


const Press = () => (
    <div className="app__bg app__wrapper section__padding" id="awards">
        <div className="app__wrapper_info">
            <SubHeading title="Press & Recognition" />
            <h1 className="headtext__cormorant">Some references...</h1>

            <div className="app__laurels_awards">
                {awards.awards.map((award) => 
                    <div className="app__laurels_awards-card" key={award.title}>
                        <a href={award.url} target="_blank" rel="noopener noreferrer" className="p__cormorant">{award.title}</a>
                    </div>
                )}
            </div>
        </div>

        <div className="app__wrapper_img">
            <img src={fotosHeader.foto5} alt="laurels_img" />
        </div>
    </div>
);

export default Press;