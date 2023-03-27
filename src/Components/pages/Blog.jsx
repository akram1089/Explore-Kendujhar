
import "../../App.css"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

import { storage } from "../database/firebase"
import { db } from '../database/firebase'
import BlogBody from "./BlogBody";
import MostPop from "./MostPop";
const Blog = ({ user, log_first }) => {

  const initialState = {
    hand_title: "",
    hand_imgUrl: "",
    hand_favorite: "No",
    hand_category: "",
    hand_description: ""
  }
  const [form, setform] = useState(initialState)
  const categoryOption = [
    "waterfalls",
    "hotels",
    "parks"
  ]

  const [file, setfile] = useState(null)
  const [hand_progress, sethand_progress] = useState()
  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, `Blog_images/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on("state_changed", (snapshot) => {
        const hand_progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        console.log(`Upload is ${hand_progress} % done`);
        sethand_progress(hand_progress)

        switch (snapshot.state) {
          case "pause":
            console.log("Upload is pause");

            break;
          case "running":
            console.log("Upload is running");

            break
          default:
            break;
        }
      }, (error) => {
        console.log(error);
      },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setform((prev) => ({ ...prev, hand_imgUrl: downloadUrl }))
          })
        }
      )
    }

    file && uploadFile()
  }, [file])


  const { hand_title, hand_favorite, hand_category, hand_description } = form

  const hand_TitleHandle = (e) => {
    setform({ ...form, hand_title: e.target.value })

  }

  const hand_FavHandle = (e) => {
    setform({ ...form, hand_favorite: e.target.value })

  }
  const hand_CategoryHandle = (e) => {
    setform({ ...form, hand_category: e.target.value })
  }
  const hand_TextareaHandle = (e) => {
    setform({ ...form, hand_description: e.target.value })
  }

  const hand_Handle_popular = async (e) => {
    e.preventDefault()
    if (hand_title && hand_favorite && hand_category && file && hand_description) {
      try {
        await addDoc(collection(db, "Blog"), {
          ...form,
          timestamp: serverTimestamp(),
          author: user.displayName,
          userId: user.uid

        })
        setform(" ")
        return toast.success('You have successfully posted!', {
          position: toast.POSITION.TOP_CENTER
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <div className="container row">

        <div className="col-8 " id='Main_blog'>
          <div className="blog mt-5">

            {
              user ?
                <div className="blog_Title mt-5 p-5">


                  <h2 className='text-center mb-4' id="Blog_head"> Share you favorite place with us </h2>



                  <input type="text" className='form-control' placeholder='Title' value={hand_title} onChange={hand_TitleHandle} />

                  <div className="favorites d-flex">
                    <h5 className="mt-1 me-3">Is it a popular destination ?</h5>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Yes" onChange={hand_FavHandle} checked={hand_favorite === "Yes"} />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Yes
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="No" onChange={hand_FavHandle} checked={hand_favorite === "No"} />
                      <label class="form-check-label" for="flexRadioDefault2">
                        No
                      </label>
                    </div>
                  </div>
                  <select class="form-select" aria-label="Default select example" onChange={hand_CategoryHandle} value={hand_category}>
                    <option selected>Please select category</option>

                    {categoryOption.map((option, index) => {
                      return <>
                        <option value={option || ""} key={index}>{option}</option>
                      </>
                    })}


                  </select>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Write details about this place</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description' value={hand_description} onChange={hand_TextareaHandle}></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input class="form-control" type="file" id="formFile" onChange={(e) => setfile(e.target.files[0])} />
                  </div>
                  <button className='button btn btn-outline-primary' disabled={hand_progress !== null && hand_progress < 100} type="submit" onClick={hand_Handle_popular}>Create post</button>
                </div>
                :
                <div className="main_blog_disable position-relative">
                  <div className="blog_Title opacity-25 pe-none  mt-5 p-5" id="disable_blog" >


                    <h2 className='text-center mb-4' id="Blog_head"> Share you favorite place with us </h2>



                    <input type="text" className='form-control' placeholder='Title' value={hand_title} onChange={hand_TitleHandle} />

                    <div className="favorites d-flex">
                      <h5 className="mt-1 me-3">Is it a popular destination ?</h5>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Yes" onChange={hand_FavHandle} checked={hand_favorite === "Yes"} />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="No" onChange={hand_FavHandle} checked={hand_favorite === "No"} />
                        <label class="form-check-label" for="flexRadioDefault2">
                          No
                        </label>
                      </div>
                    </div>
                    <select class="form-select" aria-label="Default select example" onChange={hand_CategoryHandle} value={hand_category}>
                      <option selected>Please select category</option>

                      {categoryOption.map((option, index) => {
                        return <>
                          <option value={option || ""} key={index}>{option}</option>
                        </>
                      })}


                    </select>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Write details about this place</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description' value={hand_description} onChange={hand_TextareaHandle}></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="formFile" class="form-label">Default file input example</label>
                      <input class="form-control" type="file" id="formFile" onChange={(e) => setfile(e.target.files[0])} />
                    </div>
                    <button className='button btn btn-outline-primary' disabled={hand_progress !== null && hand_progress < 100} type="submit" onClick={hand_Handle_popular}>Create post</button>
                  </div>
                  <button className="btn btn-danger shadow-lg p-3 mb-5  rounded" style={{ position: "absolute", top: "50%", left: "36%" }} onClick={log_first}>Please login first</button>
                </div>
            }



            {/* post end */}
          </div>


          <BlogBody user={user} />
        </div>
        <div className="col-4" id="Blog_popular">
          <h3 className="text-center" id="Popular_head">Popular Destinations</h3>
          <MostPop />
        </div>
      </div>

    </>
  )
}

export default Blog