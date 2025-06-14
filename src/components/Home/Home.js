import React from 'react';
import landingImg from '../../assets/landingImg.jpg';
import Intro from './Intro';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Home() {
  return (
    <div className="home-container">
      <section className="background-section">
        <img src={landingImg} alt="succulent plants" className="backgroundImg" />
        <div className="intro-wrapper">
          <Intro />
        </div>
      </section>
    </div>
  );
}
