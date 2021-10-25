import React from 'react'
import "./intro.scss"
import ParticleBackground from "../../components/particle/ParticleBackground";
import { init } from 'ityped'
import { useEffect, useRef } from 'react'




export default function Intro() {
    const textRef = useRef();
    const textRef2 = useRef();
    const paren1 = useRef();
    const paren2 = useRef();
    const lastn = useRef();

    useEffect(()=>{     
        init(textRef.current, {
            showCursor: false,
            typeSpeed: 80,
            loop: false,
            startDelay: 0,
            strings: ["Hello, I'm .mike"]
        })
    }, []);

    useEffect(()=>{     
        init(textRef2.current, {
            showCursor: false,
            typeSpeed: 80,
            loop: false,
            startDelay: 3000,
            strings: ["I'm a geospatial data scientist & developer."]
        })
    }, []);

    useEffect(()=>{     
        init(paren1.current, {
            showCursor: false,
            typeSpeed: 80,
            loop: false,
            startDelay: 1900,
            strings: ["("]
        })
    }, []);

    useEffect(()=>{     
        init(paren2.current, {
            showCursor: false,
            typeSpeed: 80,
            loop: false,
            startDelay: 1900,
            strings: [")"]
        })
    }, []);

    useEffect(()=>{     
        init(lastn.current, {
            showCursor: false,
            typeSpeed: 80,
            loop: false,
            startDelay: 2200,
            strings: ["Ward"]
        })
    }, []);

    return (
        <div className="container" id ="intro">
            <div className="title" id="title">
                <span id="text1" ref={textRef}></span>
                <span id ="paren" ref={paren1}></span>
                <span id = "name" ref={lastn}></span>
                <span id = "paren" ref={paren2}></span>
                <br />
                <span ref={textRef2}></span>    
            </div>
            <div className="particle">
                <ParticleBackground />
            </div>
            <a href="#about">
                <img src="assets/downwhite.png" alt=""/>
            </a>
        </div>
    )
}
