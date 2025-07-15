import React from 'react';

function Activities() {
  return (
    <section id="activities" className="activities">
      <h2>Our Activities</h2>
      <div className="activity-grid">
        <div className="activity-card">
          <img src="/image1.jpg" alt="Activity 1" />
          <p>
            2021 medical outreach at then arrahmatul-a'lamiya and now Al-wustaa charitable foundation
          </p>
        </div>
        <div className="activity-card">
          <img src="/image2.jpg" alt="Activity 2" />
          <p>
            2022 medical outreach at then arrahmatul-a'lamiya and now Al-wustaa charitable foundation
          </p>
        </div>
        <div className="activity-card">
          <img src="/image3.jpg" alt="Activity 3" />
          <p>
            2023 medical outreach at then arrahmatul-a'lamiya and now Al-wustaa charitable foundation
          </p>
        </div>
        <div className="activity-card">
          <img src="/image4.jpg" alt="Activity 4" />
          <p>
            2024 medical outreach at then arrahmatul-a'lamiya and now Al-wustaa charitable foundation
          </p>
        </div>
      </div>
    </section>
  );
}

export default Activities;