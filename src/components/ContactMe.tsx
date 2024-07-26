import React from 'react';
import Text from './Text/Text';
import ContactForm from './ContactForm/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <main id="main_section">
      <section id="innerp">
        <div className="page_title2">
          <div className="polygon3">
            <div className="polytext3">C</div>
          </div>
          <h1>Contact Me</h1>
        </div>

        <Text
      className="innerpage_p"
      content={
        <>
          To learn more about my services, please contact me by filling out the contact form below or you can email me at <a href="mailto:robert@robertfabros.com">robert@robertfabros.com</a>.
        </>
      }
      tag="p"
    />


        <ContactForm />
      </section>
    </main>
  );
};

export default ContactPage;
