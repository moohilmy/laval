"use client"
import {ContactForm} from '@/components';

const Contact = () => {
  return (
    <section id='contact' className="my-8">
      <h1 className="header-section">Contact us</h1>
      <div className="flex justify-around max-sm:flex-col max-sm:space-y-4">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
