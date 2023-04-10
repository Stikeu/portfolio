import React from 'react';
import {useForm, ValidationError} from '@formspree/react';


export default function ContactForm() {
  const [state, handleSubmit] = useForm("xwkjrgvr");
  
  return (
    <div id="contact" className='contact_container'>
      <h1 className='contact_titre'>N'hésitez pas à <span className='text-gradient'>me contacter</span> si vous avez des questions.</h1>
      {state.succeeded ? (
        <div className='mail_send'> 
        <div className='contact_card block_confirm'>
          <p className='text-gradient mail_confirm'>Votre mail a bien été envoyé.</p>
        </div>
        </div>
      ) : (
        <div className='contact_card'>
        <form className='contact_form' onSubmit={handleSubmit}>
          <div className='name_email_line'>
            <div className='name_label'>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" required/>
          <ValidationError prefix="Name" field="name" errors={state.errors}/>
          </div>
          <div className='email_label'>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" required/>
          <ValidationError prefix="Email" field="email" errors={state.errors}/>
          </div>
          </div>
          <label htmlFor="subject">Subject</label>
          <input id="subject" type="text" name="subject"/>
          <ValidationError prefix="Subject" field="subject" errors={state.errors}/>

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required/>
          <ValidationError prefix="Message" field="message" errors={state.errors}/>

          <button className='button_contact' type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
        </div>
      )}
    </div>
  );
}
