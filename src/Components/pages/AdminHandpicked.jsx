import React, { useEffect,useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

import { storage } from "../database/firebase"
import { db } from '../database/firebase'

const AdminHandpicked = () => {
    
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
            const storageRef = ref(storage, `Handpicked_images/${file.name}`)
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
        console.log(form);
    }
    const hand_CategoryHandle = (e) => {
        setform({ ...form, hand_category: e.target.value })
    }
    const hand_TextareaHandle = (e) => {
        setform({ ...form, hand_description: e.target.value })
    }

    const hand_Handle_popular = async (e) => {
        e.preventDefault()
        if (hand_title && hand_favorite && hand_category && file && hand_description)
        {
            try {
                await addDoc(collection(db,"Handpicked_Destinations"),{
                    ...form,
                    timestamp:serverTimestamp()
                })
            } catch (error) {
                console.log(error);
            }
        }
    }

  return (
<>
  {/* Handpicked destinations */}
  <div className="container mt-5">

<div className="popular_destinations mt-5">

    <div className="polular_Title mt-5 p-5">
        <h2 className='text-center mb-4'> Handpicked Destinations</h2>

        <input type="text" className='form-control' placeholder='Title' value={hand_title} onChange={hand_TitleHandle} />

        <div className="favorites d-flex">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="No" onChange={hand_FavHandle} checked={hand_favorite === "No"} />
                <label class="form-check-label" for="flexRadioDefault1">
                    Yes
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Yes" onChange={hand_FavHandle} checked={hand_favorite === "Yes"} />
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
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description' value={hand_description} onChange={hand_TextareaHandle}></textarea>
        </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Default file input example</label>
            <input class="form-control" type="file" id="formFile" onChange={(e) => setfile(e.target.files[0])} />
        </div>
        <button className='button btn btn-outline-primary' disabled={hand_progress !== null && hand_progress < 100} type="submit" onClick={hand_Handle_popular}>Add Popular Destination</button>
    </div>
</div>
</div>
</>
  )
}

export default AdminHandpicked