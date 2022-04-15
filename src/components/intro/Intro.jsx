import React from 'react'
import "./intro.scss"
import ParticleBackground from "../../components/particle/ParticleBackground";
import { init } from 'ityped'
import { useEffect, useRef } from 'react'




export default function Intro() {
    const textRef = useRef();
    const textRef2 = useRef();
    const textRef3 = useRef();

    useEffect(()=>{     
        init(textRef.current, {
            showCursor: false,
            typeSpeed: 55,
            loop: false,
            startDelay: 0,
            strings: ["Hello, I'm Mike Ward"]
        })
    }, []);

    useEffect(()=>{     
        init(textRef2.current, {
            showCursor: false,
            typeSpeed: 55,
            loop: false,
            startDelay: 2000,
            strings: ["I'm a geospatial data scientist & developer"]
        })
    }, []);

    useEffect(()=>{     
        init(textRef3.current, {
            showCursor: false,
            typeSpeed: 55,
            loop: false,
            startDelay: 4900,
            strings: ['Check out my projects ' ],
            onFinished: function(){
                var clickHere = document.getElementById('click-here');
                clickHere.style.opacity = 1;
            }
        })
    }, []);

    return (
        <div className="container" id ="intro">
            <div className="title" id="title">
                <span id="text1" ref={textRef}></span>
                <br />
                <span ref={textRef2}></span>
                <br />
                <span ref={textRef3}></span><a className='click-here' id='click-here' href= '#portfolio' > here </a>
            </div>
            <div className="particle">
                <ParticleBackground />
            </div>
            <a className='arrow-down' href="#about">
                <img src="assets/downwhite.png" alt=""/>
            </a>
        </div>
    )
}
