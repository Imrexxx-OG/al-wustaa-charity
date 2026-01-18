import React from 'react';

function BookPromo() {
  return (
    <section id="book-promo" className="book-promo">
      <h2>Join Our Mission</h2>
      <p>
        {/* Add details about the book you want to promote here */}
        Discover our recommended book, "Umdatul Ahkaam" to deepen your understanding of Islam and support our cause.
      </p>
      <a 
        href="/book.pdf" 
        download="Umdatul-Ahkam.pdf" 
        className="download-button"
      >
        Download the Book
      </a>
      <p>
        Join our WhatsApp community for inspiring Islamic preaching and updates on our initiatives.
      </p>
      <a href="https://chat.whatsapp.com/LI4kwVmC8SR1ZVAJKeJ4Ei" target="_blank" rel="noopener noreferrer">
        Join Our Community
      </a>
    </section>
  );
}

export default BookPromo;