import React from 'react'
import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className= "left">
                    <a href="#intro" className="logo"> .mike(Ward) </a>
                </div>
                <div className='right-full'>
                    <a href="#intro">Home</a>
                </div>
                <div className='right-full'>
                    <a href="#about">About</a>
                </div>
                <div className='right-full'>
                    <a href="#portfolio">Projects</a>
                </div>
                <div className='right-full'>
                    <a href="#contact">Contact</a>
                </div>
                <div className='right-full'>
                </div>
                <div className ="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div> 
                </div>
            </div>
        </div>
    );
}
