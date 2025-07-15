import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <div className="about-content">
        <h3>Vision Statement</h3>
        <p>Empowering Communities, Uniting Ummah, Spreading Mercy</p>
        <h3>Mission Statement</h3>
        <p>Al-Wustaa Charitable Foundation is dedicated to spreading the message of Islam with wisdom, unifying the Muslim ummah, and serving humanity through medical aid, education, and community development projects.</p>
        <h3>Aims and Objectives</h3>
        <ul>
          <li><strong>Spreading Da'wa Globally</strong>
            <ul>
              <li>Share the message of Islam with clarity and compassion</li>
              <li>Organize dawah programs, seminars, and workshops</li>
              <li>Develop and distribute Islamic literature and resources</li>
            </ul>
          </li>
          <li><strong>Unifying the Ummah</strong>
            <ul>
              <li>Promote unity and cooperation among Muslims</li>
              <li>Foster understanding and implementation of the Quran and Sunnah</li>
              <li>Develop programs to strengthen family and community bonds</li>
            </ul>
          </li>
          <li><strong>Reaching Out to the Less Privileged</strong>
            <ul>
              <li>Provide medical aid, healthcare, and emergency services</li>
              <li>Support education, vocational training, and economic empowerment</li>
              <li>Deliver humanitarian aid and disaster relief</li>
            </ul>
          </li>
        </ul>
        <h3>Core Values</h3>
        <div className="values">
          <div className="value-item">Compassion</div>
          <div className="value-item">Unity</div>
          <div className="value-item">Wisdom</div>
          <div className="value-item">Mercy</div>
          <div className="value-item">Service</div>
        </div>
      </div>
    </section>
  );
}

export default About;