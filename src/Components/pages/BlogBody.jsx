import "../../App.css"
import { collection, deleteDoc, doc, getDoc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import { db } from '../database/firebase'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"
import Loading from "./Loading"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BlogBody = ({ user }) => {

    const dismiss_edit = useRef()

    const categoryOption = [
        "waterfalls",
        "hotels",
        "parks"
    ]



    const [title, settitle] = useState(" ")
    const [hand_favorite, sethand_favorite] = useState("No")
    const [category, setcategory] = useState("")
    const [desc, setdesc] = useState("")

    const [Index, setIndex] = useState()


    const [loading, setloading] = useState(true)
    const [blogs, setblogs] = useState([])

    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, "Blog"),
            (snapshot) => {
                let list = []
                snapshot.docs.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() })
                   
                })
                setblogs(list)
                setloading(false)
            }, (error) => {
                console.log(error.log);
            }
        )
        return () => {
            unsub()

        }
    }, [])


    if (loading) {
        return <Loading />
    }


    const handledelete = async (id) => {
        if (window.confirm("Are you sure wanted to delete")) {
            try {
                setloading(true)
                await deleteDoc(doc(db, "Blog", id))
                setloading(false)
             
                return    toast.danger('You have succesfully deleted your blog!', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            
            catch (err) {
                console.log(err)
            }
        }
    }

    const handleTitle = (e) => {
        settitle(e.target.value)
    }
    const hand_FavHandle = (e) => {
        sethand_favorite(e.target.value)
    }
    const hand_CategoryHandle = (e) => {
        setcategory(e.target.value)
    }
    const hand_TextareaHandle = (e) => {
        setdesc(e.target.value)
    }


    const handleEdit = async (id) => {
        setIndex(id)
        const docRef = doc(db, "Blog", id)
        const snapShot = await getDoc(docRef)
        if (snapShot.exists()) {
            settitle(snapShot.data().hand_title)
            sethand_favorite(snapShot.data().hand_favorite)
            setdesc(snapShot.data().hand_description)
            setcategory(snapShot.data().hand_category)

        }

    }




    const update_blog = async (e) => {
        e.preventDefault()
        dismiss_edit.current.click()
        await updateDoc(doc(db, "Blog", Index), {
            hand_title: title,
            hand_favorite: hand_favorite,
            hand_category: category,
            hand_description: desc,
            timestamp: serverTimestamp(),
            author: user.displayName,
            userId: user.uid
        })

        toast.success('You have succesfully updated your blog!', {
            position: toast.POSITION.TOP_CENTER
        });
        
    }


    return (
        <>
            <div className="container">
                {blogs.map((blog) => {

                    return (
                        <>

                            <div className="row" key={blog.id}  id="Blog_mobile">
                                <div className="col-5">
                                    < LazyLoadImage effect='blur' src={blog.hand_imgUrl} alt="" id='Blog_img' />
                                </div>
                                <div className="col-7" id="hover_action">
                                    <div className="actrions_category d-flex justify-content-between">
                                        <h6 className="blog_category">{blog.hand_category}</h6>
                                        {
                                            user?.uid && blog.userId === user.uid && (
                                                <div className="actions">
                                                    <  AiFillDelete className="text-danger fs-3" id="delete_blog" onClick={() => handledelete(blog.id)} />
                                                    <AiFillEdit className="text-success fs-3" id="edit_blog" data-bs-toggle="modal" data-bs-target="#editmodal" onClick={() => handleEdit(blog.id)} />
                                                </div>
                                            )
                                        }
                                    </div>
                                    <span className="text-success fs-3">{blog.hand_title}</span> <br />
                                    <span className="text-secondary fs-4">{blog.author}</span> <br />
                                    {/* <span className="text-primary"> -&nbsp;{blog.timestamp.toDate().toDateString()}</span> <br /> */}
                                    <span>{blog.hand_description}</span>
                                    <Link to={`/details/${blog.id}`}> <button className="button btn btn -secondary" >Read More</button></Link>


                                </div>




                                <div class="modal fade" id="editmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content ">
                                            <div class="modal-header bg-dark">

                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={dismiss_edit}></button>
                                            </div>
                                            <div class="modal-body bg-dark ">


                                                <form action="">

                                                    <input type="text" className='form-control' placeholder='Title' value={title} onChange={handleTitle} />
                                                    <div className="favorites d-flex">
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


                                                    <select class="form-select" aria-label="Default select example" onChange={hand_CategoryHandle} value={category}>
                                                        <option selected>Please select category</option>

                                                        {categoryOption.map((option, index) => {
                                                            return <>
                                                                <option value={option || ""} key={index}>{option}</option>
                                                            </>
                                                        })}


                                                    </select>

                                                    <div class="mb-3">
                                                        <label for="exampleFormControlTextarea1" class="form-label">Write details about this place</label>
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description' value={desc} onChange={hand_TextareaHandle}></textarea>
                                                    </div>

                                                    <button className='button btn btn-outline-success' type="submit" onClick={update_blog}>Update  post</button>

                                                </form>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default BlogBody