import { collection, onSnapshot } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db } from '../database/firebase'
import Slider from 'react-slick'
import { BiLeftArrowCircle } from 'react-icons/bi'
import { BiRightArrowCircle } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import '../../App.css'

const HomeHandpicked = () => {
    // const [loading, setloading] = useState(true)
    const [Hand_getAllpopular, setHand_getAllpopular] = useState([])
    const [Hand_showmore, setHand_showmore] = useState(false)
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <BiRightArrowCircle className='fs-3' />,
      prevArrow: <BiLeftArrowCircle />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    useEffect(() => {
  
      const Allpop = onSnapshot(
        collection(db, "Handpicked_Destinations"),
        (snapshot) => {
          let list = []
          snapshot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() })
          })
          setHand_getAllpopular(list)
        }, (error) => {
          console.log(error);
        }
      )
      return () => {
        Allpop()
      }
    }, [])
   
  return (
    <>

    <h1 className='mt-5 mb-5 text-center'>Handpicked Destination</h1>
    <Slider {...settings}>
      {
        Hand_getAllpopular.map((Hand_dest) => {
          return (<>
            <div class="card" style={{ width: "20rem" }} id='Popular_card_body'>
              <img src={Hand_dest.hand_imgUrl} class="card-img-top" alt="..." id='Popular_images' />

              <AiOutlineHeart className='Popular_heart' />

              <div class="card-body" >
                <h5 class="card-title text-dark">{Hand_dest.hand_title}</h5>
                <p class="card-text text-dark">

                  {
                    Hand_showmore ? Hand_dest.Hand_description : `${Hand_dest.hand_description.substring(0, 50)}....`
                  }
                </p>
                <button className='button btn btn-outline-success' onClick={() => setHand_showmore(!Hand_showmore)}>More Details</button>
              </div>
            </div>


          </>)
        })
      }

    </Slider>



  </>
  )
}

export default HomeHandpicked