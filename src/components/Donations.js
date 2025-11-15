import React from 'react';

function Donations() {
  return (
    <section id="donations" className="donations">
      <h2>Support Our Cause</h2>
      <p>Your donations help us provide medical aid, education, and humanitarian support. Use the accounts below to contribute.</p>
      <div className="donation-accounts">
        <ul>
          <li>
            <strong>Naira Account (NGN)</strong><br />
            Bank Name: Jaiz Bank<br />
            Account Name: Al-Wustaa Charitable Foundation<br />
            Account No: 0020762236
          </li>
          <li>
            <strong>Dollar Account (USD)</strong><br />
            Bank Name: Jaiz Bank<br />
            Account Name: Al-Wustaa Charitable Foundation<br />
            Account No: 0020762315
          </li>
          <li>
            <strong>Euro Account (EUR)</strong><br />
            Bank Name: Jaiz Bank<br />
            Account Name: Al-Wustaa Charitable Foundation<br />
            Account No: 0020762339
          </li>
          <li>
            <strong>Pounds Account (GBP)</strong><br />
            Bank Name: Jaiz Bank<br />
            Account Name: Al-Wustaa Charitable Foundation<br />
            Account No: 0020762401
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Donations;