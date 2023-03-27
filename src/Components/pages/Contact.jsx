import React from 'react'
import "../../Keonjhar.css"
import "../../App.css"
import Contact_banner from "../../Components/images/contact_keonjhar/Contact_banner.jpg"
import { MdLocationPin } from "react-icons/md"
import { MdEmail } from "react-icons/md"
import { MdPhone } from "react-icons/md"
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q3dfofn', 'template_qlhvfdi', form.current, 'N_v4wdmm6iPK72rwp')

      .then(() => {
        return toast.success('Your message have been sent !', {
          position: toast.POSITION.TOP_CENTER
        });
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>

      <div className="ken_hero">
        < LazyLoadImage effect='blur' src={Contact_banner} alt="" id='ken_banner'  width="100%" />
        <h2 className='contact_content'>--WE ARE HERE FOR YOU--</h2>
      </div>

      <h1 className='text-center mt-5'>GET IN TOUCH</h1>
      <div className="contact_boxes">


        <div className="main_card">

          <div className="icon">
            <MdLocationPin className='location_font' />
          </div>

          <div className="card_title">
            <h3 className='mt-3'>ADDRESS</h3>
          </div>
          <div className="card_adress text-center">
            <h5>Tufail Akram</h5>
            <h5>AT/PO -  Champua</h5>
            <h5>District - Kendujhar</h5>
            <h5>State - Odisha</h5>
            <h5>Pin Code - 758041</h5>
          </div>

        </div>

        <div className="main_card">

          <div className="icon">
            <MdPhone className='location_font' />
          </div>

          <div className="card_title">
            <h3 className='mt-3'>PHONE</h3>
          </div>
          <div className="card_adress text-center">
            <h5><a href="tel:7008566127">+91700-856-6127</a></h5>

          </div>

        </div>
        <div className="main_card">

          <div className="icon">
            <MdEmail className='location_font' />
          </div>

          <div className="card_title">
            <h3 className='mt-3'>EMAIL</h3>
          </div>
          <div className="card_adress text-center">
            <h5>Mail your query to below mail address</h5>
            <h5><a href="mailto:tufailakram81@gmail.com">tufailakram81@gmail.com</a></h5>

          </div>

        </div>


      </div>



      <div className="container">
        <div className="row " style={{ marginTop: "6rem", marginBottom: "2rem" }} id="message_main">

          <div className="col-6" style={{ borderRight: "2px solid #ffffff94 " }}>


            <h1 className='mb-3 text-center' id='message_us'>Message Us</h1>
            <h4>* If you have query related to the content , feel free to send us message. </h4>
            <h4>* Please report any issue you have faced during  visiting into the website , so we can fix as earliest possible. </h4>
          </div>
          <div className="col-6" style={{ padding: "1rem" }} >

            <form ref={form} onSubmit={sendEmail}>
              <div className="message_names d-flex">
                <input type="text" name="fname" id="" className="form-control" placeholder='First name :' />
                <input type="text" name="lname" id="" className="form-control" placeholder='Last name :' />
              </div>
              <br />
              <input type="email" name="email" id="" className="form-control" placeholder='Email Address :' />

              <br />
              <div class="form-floating">
                <textarea class="form-control" name='message' placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "250px" }}></textarea>
                <label for="floatingTextarea2 " className='text-white-50'>Please write your query here :</label>
              </div>
              <br />
              <button class="button-37 " type="submit"  >Send message</button>
            </form>
          </div>


        </div>

        <div className="contact_map mt-5 mb-5">
          <h1 className='text-center mb-4'>Location</h1>
          <iframe style={{ width: "100%", border: "0" }} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d397.1556288380105!2d85.66503731656948!3d22.071041626619103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schampua%20masjid!5e0!3m2!1sen!2sin!4v1679729670598!5m2!1sen!2sin" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
    </>
  )
}

export default Contact