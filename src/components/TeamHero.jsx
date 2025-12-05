import React from 'react';
import '../styles/TeamHero.css';

const TeamHero = () => {
  return (
    <section className="team-hero">
      <div className="team-hero__overlay" />
      <div className="team-hero__content container">
        <h1 className="team-hero__title">
          The People Powering Godwitt
        </h1>
        <p className="team-hero__subtitle">
          From Vision To Execution, These Are The People Shaping India's Industrial Real Estate
        </p>
        <button className="team-hero__button">
          Meet the Team →
        </button>
      </div>
    </section>
  );
};

export default TeamHero;
