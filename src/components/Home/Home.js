import React from 'react';
import { useNavigate } from 'react-router-dom';
import landingImg from '../../assets/landingImg.jpg';
import Intro from './Intro';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='intro-wrapper'>
      <Intro />
      <button
        style={{
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          padding: '0.75rem 2rem',
          borderRadius: '6px',
          fontSize: '1.1rem',
          margin: '2rem auto 0',
          display: 'block',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/projects')}
      >
        View Projects
      </button>
    </div>
  );
}
