import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { storage } from "../database/firebase"
import { db } from '../database/firebase'
import AdminHandpicked from './AdminHandpicked'

const AdminPanel = () => {
    const initialState = {
        title: "",
        imgUrl: "",
        favorite: "No",
        category: "",
        description: ""
    }
    const categoryOption = [
        "waterfalls",
        "hotels",
        "parks"
    ]
    const [progress, setprogress] = useState(null)
    const [form, setform] = useState(initialState)
    const [file, setfile] = useState(null)
    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, `Pupular_images/${file.name}`)
            const uploadTask = uploadBytesResumable(storageRef, file)
            uploadTask.on("state_changed", (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress} % done`);
                setprogress(progress)
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
                        setform((prev) => ({ ...prev, imgUrl: downloadUrl }))
                    })
                }
            )
        }

        file && uploadFile()
    }, [file])






    const { title, favorite, category, description } = form

    const TitleHandle = (e) => {
        setform({ ...form, title: e.target.value })

    }

    const FavHandle = (e) => {
        setform({ ...form, favorite: e.target.value })
        console.log(form);
    }
    const CategoryHandle = (e) => {
        setform({ ...form, category: e.target.value })
    }
    const TextareaHandle = (e) => {
        setform({ ...form, description: e.target.value })
    }

    const Handle_popular = async (e) => {
        e.preventDefault()
        if (title && favorite && category && file && description)
        {
            try {
                await addDoc(collection(db,"Destinations"),{
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
        <div className="container mt-5">

            <div className="popular_destinations mt-5">

                <div className="polular_Title mt-5 p-5">
                    <h2 className='text-center mb-4'>Upload Popular Destinations</h2>

                    <input type="text" className='form-control' placeholder='Title' value={title} onChange={TitleHandle} />

                    <div className="favorites d-flex">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="No" onChange={FavHandle} checked={favorite === "No"} />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Yes" onChange={FavHandle} checked={favorite === "Yes"} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                No
                            </label>
                        </div>
                    </div>
                    <select class="form-select" aria-label="Default select example" onChange={CategoryHandle} value={category}>
                        <option selected>Please select category</option>

                        {categoryOption.map((option, index) => {
                            return <>
                                <option value={option || ""} key={index}>{option}</option>
                            </>
                        })}


                    </select>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description' value={description} onChange={TextareaHandle}></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Default file input example</label>
                        <input class="form-control" type="file" id="formFile" onChange={(e) => setfile(e.target.files[0])} />
                    </div>
                    <button className='button btn btn-outline-primary' disabled={progress !== null && progress < 100} type="submit" onClick={Handle_popular}>Add Popular Destination</button>
                </div>
            </div>
        </div>

        <AdminHandpicked/> 
      </>
    )
}

export default AdminPanel