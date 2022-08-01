import React from 'react';
import './BackgroundWaveAnimation.scss';

function BackgroundWaveAnimation() {
  return (
    <>
      <section className="wavesection d-none d-md-block d-lg-none">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </section>
    </>
  );
}

export default BackgroundWaveAnimation;
