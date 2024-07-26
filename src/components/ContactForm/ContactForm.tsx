import React from 'react';
import '../../App.js';

const ContactForm: React.FC = () => {
  return (
    <div className='form'>
    <form id="contact_form" method="POST" action="https://formsubmit.co/739079b866dae0e73696b9a5a40034b9">
      <input type="hidden" name="_next" value="https://robertfabros.com/contact-form.html" />
      <input type="hidden" name="_captcha" value="false" />

      <fieldset>
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <div className="name_error error" id="name_error">* Please enter your name.</div>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
            <div className="email_error error" id="email_error">* Please enter your email address.</div>
            <div className="emailformat_error error" id="emailformat_error">* Invalid email address</div>
          </li>
          <li>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="phone" id="phone" />
            <div className="phone_error error" id="phone_error">* Please enter your phone number.</div>
          </li>
          <li>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={4}></textarea>
            <div className="message_error error" id="message_error">* Please enter a message.</div>
          </li>
          <li>
            <div className="securebox">
              <div className="g-recaptcha" data-sitekey="6Lf5kh0pAAAAAPdS1AqT_dtunDjJWd_iP-6_PhJ3"></div>
              <div className="captcha_error error" id="captcha_error">* Please complete the reCAPTCHA.</div>
            </div>
          </li>
          <li>
            <button type="submit" id="submit">Submit</button>
            <button type="reset" id="clear">Clear Form</button>
          </li>
        </ul>
      </fieldset>
    </form>
    </div>
  );
};

export default ContactForm;
