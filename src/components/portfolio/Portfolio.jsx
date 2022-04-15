import React from "react"
import "./portfolio.scss"
import { useState } from "react"
import ParticleBackground from "../../components/particle/ParticleBackground";


export default function Portfolio() {
    const [currentSlider,setCurrentSlider] = useState(0)
    const data = [
        {
            id: "1",
            title: "LLCs in NYC",
            desc: "Interactive web map for exploring vacant land owned by LLCs in NYC",
            img: "",
            tech: ['React ', 'Mapbox ', 'Python ', 'PostgreSQL '],
            src: "https://llcs-in-nyc.com"
        },
        {
            id: "2",
            title: "Spatial Interpolation Toolbox",
            desc: "A responsive GUI that performs six methods of spatial interpolation ",
            img: "",
            tech: ['Python ', 'Pandas ', 'PyQt ','GeoPandas'],
            src: "https://github.com/mikeRobWard/spatial-interpolation-toolbox"
        },
        {
            id: "3",
            title: "Building Footprint Map",
            desc: "Interactive map with over 1 million building footprints and labeled land use types",
            img: "",
            tech: ["JavaScript ", "Mapbox ", "Tippecanoe ", "Python "],
            src: "https://mikerobward.github.io/building-footprints/"
        },
        {
            id: "4",
            title: ".mike(Ward) dev",
            desc: "The source code of this website",
            img: "",
            tech: ["React ", "Sass "],
            src: "https://github.com/mikeRobWard/mike-ward-dev"
        }
        
    ]
    const handleClick = (way) => {
        way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : data.length - 1) :
        setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0);
    }

    return (
        <div className="portfolio" id="portfolio">
            <div className="portfolioTitle">
                <span> Projects </span>
            </div>
            <div className="plug">
                <span>A few highlights of my open-source projects. 
                View them all <br /> <a href="https://github.com/mikeRobWard?tab=repositories"
                target="_blank" rel="noreferrer"> on Github</a>
                </span>
            </div>
            <div className="slider" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
            {data.map((d) => (
                <div className="slidercontain">
                    <div className="project">
                        <div className="leftside">
                            <div className="leftcontain">
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span><a href={d.src} target="_blank" rel="noreferrer"> Source </a></span>
                            </div>
                        </div> 
                        <div className="rightside">
                            <img src="assets/pattern1.png" alt="" className="pattern"/>
                            <img src="assets/compedit.png" alt="" className="comp"/>
                            <div id= "text-wrapper">
                                <p id="text-item">{d.tech}</p>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
            <img src="assets/downwhite.png" className="arrowleft" alt="" 
            onClick={()=>handleClick("left")}/>
            <img src="assets/downwhite.png" className="arrowright" alt=""
            onClick={()=>handleClick("right")}/>
            <div className="particle">
                <ParticleBackground />
            </div>
        </div>
    );
}
