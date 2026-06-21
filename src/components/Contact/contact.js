import React,{useRef} from 'react'
import './contact.css'
import Linkdin from '../../assets/linkdin.png'
import Github from '../../assets/github.jpg'
import Instagram from '../../assets/instagram.png'
import Leetcode from '../../assets/leetcode.png'
import Infosys from '../../assets/Infosys-Logo.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form=useRef()
    const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_w41btnr',
      'template_wlvak6m',
      form.current,
      {
        publicKey: '1hS7gVLiZKpttl1nw',
      }
    )
    .then(
  () => {
    alert("SUCCESS!");
  },
  (error) => {
    alert(error.text);
    console.log(error);
  }
);
}; 


  return (
    <section id="contactPage">
        <div id='clients'>
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes.
            </p>
            <div className="clientImgs">
                <img src={Infosys} alt="" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Your Name' name='name' className="name" />
                <input type="email" placeholder='Enter Your Email' name='email' className="email" />
                <textarea name="message" rows="5" placeholder='Your Message' className='msg'></textarea>
                <button value='Send' className="submitBtn" type='submit'>Submit</button>
                <div className="links">
                    <a href="https://www.linkedin.com/in/viratsinghr97/">
                      <img src={Linkdin} alt="" className="link" />
                    </a>
                    <a href="https://github.com/viratsingh97">
                      <img src={Github} alt="" className="link" />
                    </a>
                   <a href="https://www.instagram.com/virat_rajput._._/">
                     <img src={Instagram} alt="" className="link-i" />
                   </a>
                    <a href="https://leetcode.com/u/virat_singhr97/">
                      <img src={Leetcode} alt="" className="link-l" />
                    </a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
