import React from 'react';

function Activities() {
  return (
    <section id="activities" className="activities">
      <h2>Our Activities</h2>
      <div className="activity-grid">
        <div className="activity-card">
          <img src="/image1.jpg" alt="Activity 1" />
          <p>
            2021 Medical Outreach at then Arrahmatul-a'lamiya and now Al-wustaa Charitable Foundation
          </p>
        </div>
        <div className="activity-card">
          <img src="/image2.jpg" alt="Activity 2" />
          <p>
            2022 Medical Outreach at then Arrahmatul-a'lamiya and now Al-wustaa Charitable Foundation
          </p>
        </div>
        <div className="activity-card">
          <img src="/image3.jpg" alt="Activity 3" />
          <p>
            2023 Medical Outreach at then Arrahmatul-a'lamiya and now Al-wustaa Charitable Foundation
          </p>
        </div>
        <div className="activity-card">
          <img src="/image4.jpg" alt="Activity 4" />
          <p>
            2024 Medical Outreach at then Arrahmatul-a'lamiya and now Al-wustaa Charitable Foundation
          </p>
        </div>
      </div>
    </section>
  );
}

export default Activities;