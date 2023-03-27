import React, { useState, useRef } from 'react'
import hero from '../images/hero.mp4'
import nav_icon from "../images/nav-icon.png"
import { TypeAnimation } from 'react-type-animation';
import { AiFillPauseCircle } from 'react-icons/ai'
import { AiFillPlayCircle } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import Destination from "./Datas/Destination"
import HomePopular from './HomePopular';
import HomeHandpicked from './HomeHandpicked';
import Hero from '../images/Post_Hero_images/Hero_images/Hero.jpg'
import Asur_khol_waterfall from '../images/Destination_images/Asur_khol_waterfall.jpg'
import handibhanga_waterfall from '../images/Destination_images/handibhanga_waterfall.jpg'
import Gundichaghagi_waterfall from '../images/Destination_images/Gundichaghagi_waterfall.jpg'
import Bhimkund from '../images/Destination_images/Bhimkund.jpg'
import khandadhar_falls_junior from '../images/Destination_images/khandadhar_falls_junior.jpg'
import Tata_aquatica from '../images/Destination_images/Tata_aquatica.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Home = () => {
  const [Filter_active, setFilter_active] = useState("All_dest")
  const [Destinations, setDestinations] = useState(Destination)

  const [Fav, setFav] = useState(true)
  const Favorite = () => {

    if (Fav) {
      setFav(false)

    } else {
      setFav(true)
    }

  }
  const [play, setplay] = useState(true)
  const video = useRef()
  const Play_Pause = () => {
    if (play) {
      setplay(false)
      video.current.pause()
    } else {
      setplay(true)
      video.current.play()
    }



  }

  //FIlter

  const Filter_Dest = (filterCat) => {
    setFilter_active(filterCat)

    if (filterCat === "All_dest") {
      setDestinations(Destination)
    } else {
      const Filtered_dest = Destination.filter((Curr_dest) => {
        return Curr_dest.category === filterCat
      })
      setDestinations(Filtered_dest)
    }
    console.log(filterCat);



  }

  return (

    <div className='h-100  text-light'>
      <div className="hero ">
        {/* <video ref={video} autoPlay muted loop id="myVideo" poster={nav_icon}>
          {/* <source src={hero} type="video/mp4" /> */}
        {/* </video> */}
        <LazyLoadImage effect='blur' src={Hero} alt="" className='Hero_img' width="100%" />

        <div className="hero_mini_images">
          < img  src={Asur_khol_waterfall} alt="" className='hero_mini' />
          < img  src={handibhanga_waterfall} alt="" className='hero_mini' id='hero_mini2' />
          < img  src={Gundichaghagi_waterfall} alt="" className='hero_mini' id='hero_mini4' />

        </div>
        <div className="hero_mini_images_01">
          < img  src={Bhimkund} alt="" className='hero_mini01' />
          < img  src={khandadhar_falls_junior} alt="" className='hero_mini' id='hero_mini02' />
          < img  src={Tata_aquatica} alt="" className='hero_mini' id='hero_mini03' />

        </div>
        <div className="hero_left_content">
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="1000">
                <h5 className='carousel_content'>
                <span className='text-warning'>Kendujhar</span> is a town with municipality in Kendujhar District in the Indian state of Odisha. It is the administrative headquarters of the Kendujhar district, and it is one of the fifth scheduled areas of Odisha.
                </h5>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
              <h5 className='carousel_content'>
              <span className='text-primary'>Kendujhar</span> is a town with municipality in Kendujhar District in the Indian state of Odisha. It is the administrative headquarters of the Kendujhar district, and it is one of the fifth scheduled areas of Odisha.
                </h5>
              </div>
              <div class="carousel-item">
              <h5 className='carousel_content'>
              <span className='text-success'>Kendujhar</span> is a town with municipality in Kendujhar District in the Indian state of Odisha. It is the administrative headquarters of the Kendujhar district, and it is one of the fifth scheduled areas of Odisha.
                </h5>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="hero_inner_content">
          <h1>Welcome to Kendujhar </h1>
          <h1>
            <TypeAnimation
              sequence={[
                ' The city of waterfalls', // Types 'One'
                1000, // Waits 1s
                'The city of Iron Ore', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'The city of Pilgrimage sites', // Types 'Three' without deleting 'Two'
                2000, // Waits 2s
                'The city of Biodiversity',
                2000, // Types 'Three' without deleting 'Two'
                () => {
                  // Place optional callbacks anywhere in the array
                }
              ]}

              cursor={true}
              repeat={Infinity}
              style={{ color: "#91f891e0" }}

            />
          </h1>
        </div>
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
      <div className="play_pause fs-2" onClick={Play_Pause}>
        {
          play ? <AiFillPlayCircle /> : <AiFillPauseCircle />
        }
      </div>


      <div className="container post_hero mt-5">
        <ul className='filter d-flex'>
          <li className={Filter_active === 'All_dest' ? "filter_active" : ""} onClick={() => Filter_Dest("All_dest")} >All Destinations</li>
          <li className={Filter_active === 'waterfalls' ? "filter_active" : ""} onClick={() => Filter_Dest("waterfalls")}>Stunning Waterfalls</li>
          <li className={Filter_active === 'hotels' ? "filter_active" : ""} onClick={() => Filter_Dest("hotels")}>Best Hotels</li>
          <li className={Filter_active === 'parks' ? "filter_active" : ""} onClick={() => Filter_Dest("parks")}>Amazing Parks</li>

        </ul>

      </div>

      <div className="filter_contents container mt-5">
        {
          Destinations.map((Dest, index) => {

            if (index % 2 !== 0) {
              return (<>

                <div className="left_img d-flex mb-4" >
                  <div className="left_image ">
                    < LazyLoadImage effect='blur' src={Dest.image} alt="Khandhar_waterfalls" id='left_img' />
                    {
                      Fav ? <AiOutlineHeart className='Empty_heart' onClick={Favorite} /> : <AiFillHeart className='Empty_heart' onClick={Favorite} />
                    }
                  </div>
                  <div className="left_content">
                    <h2 className='left_img_title'>{Dest.title}</h2>
                    <h5 className='left_img_desc'>{Dest.desc}</h5>
                    <button className='button btn btn-outline-success'>More Details</button>
                  </div>
                </div>



              </>)
            }
            else if (index % 2 === 0) {

              return (<>
                <div className="right_img d-flex mt-4 mb-4">

                  <div className="right_content">
                    <h2 className='right_img_title'>{Dest.title}</h2>
                    <h5 className='right_img_desc'>{Dest.desc}</h5>
                    <button className='button btn btn-outline-success'>More Details</button>
                  </div>
                  <div className="right_image ">
                    < LazyLoadImage effect='blur' src={Dest.image} alt="Khandhar_waterfalls" id='right_img' />
                    {
                      Fav ? <AiOutlineHeart className='Empty_heart_right' onClick={Favorite} /> : <AiFillHeart className='Empty_heart_right' onClick={Favorite} />
                    }
                  </div>
                </div>
              </>)

            }
            return "hii"
          })
        }
      </div>
      <div className="container">
        <HomePopular />
        <HomeHandpicked />

      </div>




    </div>





  )
}

export default Home