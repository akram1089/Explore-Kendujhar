import { collection, onSnapshot } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db } from '../database/firebase'
import Slider from 'react-slick'
import { BiLeftArrowCircle } from 'react-icons/bi'
import { BiRightArrowCircle } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import '../../App.css'

const HomePopular = () => {
  // const [loading, setloading] = useState(true)
  const [getAllpopular, setgetAllpopular] = useState([])
  const [showmore, setshowmore] = useState(false)
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
      collection(db, "Destinations"),
      (snapshot) => {
        let list = []
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() })
        })
        setgetAllpopular(list)
      }, (error) => {
        console.log(error);
      }
    )
    return () => {
      Allpop()
    }
  }, [])
  console.log(getAllpopular);
  return (
    <>

      <h1 className='mt-5 mb-5 text-center'>Popular Destination</h1>
      <Slider {...settings}>
        {
          getAllpopular.map((popular_dest, Pop_desc) => {
            return (<>
              <div class="card" style={{ width: "20rem" }} id='Popular_card_body'>
                <LazyLoadImage
                  class="card-img-top" alt="..." id='Popular_images'
          
                  height={popular_dest.height}
                  src={popular_dest.imgUrl}
                  width={popular_dest.width} 
                  effect="blur"
                  />


                <AiOutlineHeart className='Popular_heart' />

                <div class="card-body" >
                  <h5 class="card-title text-dark">{popular_dest.title}</h5>
                  <p class="card-text text-dark">

                    {
                      showmore ? popular_dest.description : `${popular_dest.description.substring(0, 50)}`
                    }
                  </p>
                  <button className='button btn btn-outline-success' onClick={() => setshowmore(!showmore)}>More Details</button>
                </div>
              </div>


            </>)
          })
        }

      </Slider>



    </>
  )
}

export default HomePopular