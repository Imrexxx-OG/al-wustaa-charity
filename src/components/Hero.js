import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <h1>Al-Wustaa Charitable Foundation</h1>
      <p>Empowering Communities, Uniting Ummah, Spreading Mercy</p>
      <p>SAVE LIFE SAVE HUMANITY - ومن أحياها فكأنما أحيا الناس جميعا</p>
      <video controls>
        <source src="https://www.facebook.com/watch/?v=1295694785181539" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default Hero;