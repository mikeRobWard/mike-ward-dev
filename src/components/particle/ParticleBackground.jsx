import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "./particle-config";
import "./particlebackground.scss"

export default function ParticleBackground() {
    return (
        <Particles id="particle" params={ParticleConfig}></Particles>
    );
}