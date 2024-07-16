import React, { useState } from 'react';
import './Subscription.css'; // Import CSS file for styling

function Subscription() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform subscription logic here
    // For example, send the email to a server or API
    console.log('Subscribed with email:', email);
    setMessage('Thank you for subscribing!');
    setEmail('');
    localStorage.setItem('subscribed', true); // This should eventually be handled by an API call
  };

  return (
    <div>
      <div className="subscription-container">
        <h2 className='subscriptionTitle'>Subscribe to Meow Market and Enjoy Exclusive Benefits!</h2>
        <ul>
          <li><strong>Exclusive Discounts:</strong> Get special discounts and early access to sales.</li>
          <li><strong>Free Shipping:</strong> Enjoy free shipping on orders above $50.</li>
          <li><strong>Access to New Arrivals:</strong> Be the first to know about new products.</li>
          <li><strong>Member-Only Products:</strong> Access to exclusive subscriber-only products.</li>
          <li><strong>Monthly Giveaways:</strong> Enter to win exciting prizes every month.</li>
          <li><strong>Birthday Specials:</strong> Receive discounts and gifts on your birthday.</li>
          <li><strong>Personalized Recommendations:</strong> Get tailored product suggestions.</li>
          <li><strong>Exclusive Content:</strong> Access blogs, videos, and special events.</li>
          <li><strong>Priority Customer Support:</strong> Get faster resolution of queries.</li>
          <li><strong>Loyalty Points:</strong> Earn points on every purchase and redeem them.</li>
          <li><strong>Monthly Newsletters:</strong> Stay informed with the latest news and trends.</li>
          <li><strong>Community Access:</strong> Join our exclusive community of subscribers.</li>
        </ul>
        <p>Subscribe now and start enjoying these amazing benefits!</p>
        <form onSubmit={handleSubmit} className="subscription-form">
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="subscription-input"
          />
          <button type="submit" className="subscription-button">Subscribe Now</button>
        </form>
        {message && <p className="subscription-message">{message}</p>}
      </div>
    </div>
  );
}

export default Subscription;
