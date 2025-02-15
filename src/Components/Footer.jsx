import React from 'react'
import nav_icon from './images/nav-icon.png'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineCopyright} from 'react-icons/ai'
import {BsFillHeartFill} from 'react-icons/bs'
import {FaHandsHelping} from 'react-icons/fa'

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div div className="container ">
            <div className="row  mb-4" id='footer'>

                <div className="col-3" id='footer_icon'>

                    <div className="footer_icon_menu">
                        <Link to="/"> <img src={nav_icon} alt="" className='footer-icon' /> </Link>


                    </div>
                    <div className="footer">
                        <h3> <span className='text-success'>E</span>xpl<span className='text-warning'>o</span>re <span className='text-success'>K</span>end<span className='text-warning'>u</span>jhar</h3>
                    </div>
                </div>
                <div className="col-3" id='footer_places'>
                    <div className="Footer_places">
                        <h3>Places must visit</h3>
                    </div>
                    <div className="contact_footer_content">
                        <Link to="/">Popular Places</Link>
                        <Link to="/"> Handpicked Places</Link>
                        <Link to="/">Stunning Waterfalls</Link>
                        <Link to="/">Best Hotels</Link>
                        <Link to="/">Amazing Parks</Link>

                    </div>

                </div>
                <div className="col-3" id='footer_more_about_kendujhar'>
                    <div className="Footer_places">
                        <h3>More About Kendujhar </h3>
                    </div>
                    <div className="contact_footer_content">
                        <Link to="/"> Administratives </Link>
                        <Link to="/">  Map </Link>
                        <Link to="/"> History</Link>
                        <Link to="/"> Census</Link>
                        <Link to="/">HelpLine </Link>

                    </div>

                </div>
                <div className="col-3"  id='footer_more_about_kendujhar'>
                    <div className="Footer_places">
                        <h3>Social    </h3>
                    </div>
                    <div className="contact_footer_content">

                        <div className="subscribe_section d-flex">
                            <input type="text" className='form-control' placeholder='Your email' />
                            <button className="button btn btn-danger">SUBSCRIBE</button>
                        </div>
                        <div className="Footer_places mt-3">
                            <h3>Follow Us    </h3>
                        </div>
                        <div className="contact_footer_content d-flex">
                         <div className="social_icons d-flex">
                         <BsInstagram className="footer_social " id='insta'  />
                               <BsFacebook className="footer_social " id='face' />
                               <BsTwitter className="footer_social "  id='twi' />
                               <BsYoutube className="footer_social " id='you' /> 
                               <BsDiscord className="footer_social " id='dis' />
                               <BsLinkedin className="footer_social " id='link' />
                         </div>
                        </div>

                    </div>



                </div>
            </div>
<hr />
<div className="row mb-5">
    <div className="col-12 text-center"><AiOutlineCopyright/>All information is gathered from internet and keonjhar officals site</div>
    <div className="col-6 text-center mt-4">Designed &Developed<BsFillHeartFill className="text-danger"/> by Tufail Akram</div>
    <div className="col-6 text-center mt-4">Thank you for <FaHandsHelping className="text-success"/> visiting our website </div>
</div>
        </div>
        
    )
}

export default Footer
