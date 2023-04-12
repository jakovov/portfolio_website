import React from 'react';
import '../styles/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useRef } from 'react';
import useEmailForm from '../components/useEmailForm';

function Contact() {
  const form = useRef();
  const { formData, handleInputChange, handleSubmit, isError, showMessage, isSubmitted } = useEmailForm();


 

  return (
    <div id='zamalce'>
      <header>
        <div className='dare'>
          <div className='dareinside'>
            <div className='section-heading page-heading'>
              <h2 className='section-title'>Get in Touch</h2>
              <div className='animated-bar'></div>
            </div>
          </div>
        </div>
        <div className='container py-5'>
          <div className='row custom-row'>
            <div className='col-md-5'>
              <div className='contact-card'>
                <h3>Contact Information</h3>
                <ul>
                  <li>Skopje, Macedonia</li>
                  <li>(123) 456-7890</li>
                  <li>atanasjakovov@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className='col-md-7'>
              <div className='contact-form'>
                <h3>Message Me</h3>
                <form ref={form} onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      placeholder='Enter your name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      placeholder='Enter your email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      id='message'
                      placeholder='Enter your message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  {isError && (
                    <div className='popup error'>
                      <p>Please fill in all fields.</p>
                    </div>
                  )}
                  {showMessage && !isError && (
                    <div className='popup success'>
                      <p>Your message was sent successfully.</p>
                    </div>
                  )}
                  {isSubmitted && (
                    <div className='popup success'>
                      <p>Your message was sent successfully.</p>
                    </div>
                  )}
                  <button type='submit' className='btn mybtn' value='send'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
  
}

export default Contact;
