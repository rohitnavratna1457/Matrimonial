import React from 'react';
import '../ContactUs/Contact.css';
// import Contact from '../Component/Contact'
const ContactUs = () => {

  // console.log("success...")

  const handleSubmit = (e) => {
    // e.preventDefault();
    // FormSubmit will handle the form data and send it to your email
  };

  return (
    <div className="contact-container">
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859.4677671673053!2d81.62613957057873!3d21.234404783731826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd860cf3c217%3A0x493efc4d076691fb!2sYashviTech%20IT%20Solution!5e0!3m2!1sen!2sin!4v1719344226983!5m2!1sen!2sin"
          width="100%"
          height="600px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="form-section">
        <h2 className="contact-title">Contact With Us</h2>
        <p className="contact-description">If you have any questions, please feel free to contact us.</p>
        <form
          action="https://formsubmit.co/supremecare503@gmail.com" // replace with your email
          method="POST"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="New submission!" />
          <input type="hidden" name="_next" value="https://your-website.com/thank-you" />
          <div className="input-group">
            <input type="text" name="name" placeholder="Name" required />
            {/* <input type="email" name="email" placeholder="Email" required /> */}
          </div>

          <div className="input-group">
            {/* <input type="text" name="name" placeholder="Name" required /> */}
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <input name="message" placeholder="Enter your message" required></input>
          <button type="submit" className="contact-btn">Send</button>
          <div className="newsletter">
            <input type="checkbox" id="subscribe" name="subscribe" />
            <label htmlFor="subscribe">Do you want to subscribe to our Newsletter?</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
