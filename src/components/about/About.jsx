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
                <br />
                Hi, I'm Mike! I'm a geospatial data scientist & software developer living in Philadelphia. I love working on open-source projects and learning new technologies. Welcome to
                my website where I feature some of my favorite projects.
                </p>
                <br />
                <p className="a-desc">
                I am fluent in:
                </p>

                <br/>
                <ul>
                    <li> Languages: Python, Javascript, R, HTML, CSS</li>
                    <li> Databases: PostgreSQL / PostGIS</li>
                    <li> JS Frameworks & Libraries: React, Mapbox GL JS</li>
                    <li> Python Libraries: Pandas, Geopandas, Seaborn, Matplotlib, scikit-learn</li>
                </ul>
            </div>
        </div>
    );
}
