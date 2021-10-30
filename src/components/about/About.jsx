import React from 'react'
import "./about.scss"

export default function About() {
    return (
        <div className="about" id="about">
            <div className ="background">
                <img src="assets/pattern1.png" alt=""/>
            </div>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="assets/portlandrsz.png" alt="" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-desc">
                Hi, I'm Mike! I'm a geospatial data scientist & developer working in Philadelphia. I love building open-source projects and learning new technologies. Welcome to
                my website where I feature some of my favorite projects.
                </p>
                <br />
                <p className="a-desc">
                Here are a few facts about me:
                </p>

                <br/>
                <ul>
                    <li>I have three cats: Tofu, Maddie, and Frodo</li>
                    <li>I love sci-fci horror, The Thing (1982) is my favorite</li>
                    <li>I own more Magic: The Gathering cards than I know what to do with</li>
                    <li>I've performed on-stage with the band MGMT. I bet you can't guess the instrument</li>
                </ul>
            </div>
        </div>
    );
}
