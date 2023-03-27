import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../database/firebase'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const MostPop = () => {
    const navigate = useNavigate()
    const [blogs, setblogs] = useState([])

    useEffect(() => {
        const PopBlogs = async () => {
            const blogRef = collection(db, "Blog")
            const Popquery = query(blogRef, where("hand_favorite", "==", "Yes"))
            const querySnapShot = await getDocs(Popquery)

            let popblogs = [];
            querySnapShot.forEach((doc) => {
                popblogs.push({ id: doc.id, ...doc.data() })

            })

            setblogs(popblogs)

        }
        return () => {
            PopBlogs()

        }
    }, [blogs])


    return (
        <>
            {
                blogs.map((blog) => {
                    return (
                        <div key={blog.id} style={{ cursor: "pointer" }} onClick={() => navigate(`/details/${blog.id}`)}>
                            <div className="row mt-4 mb-4">
                                <div className="col-5">

                                    < LazyLoadImage effect='blur' src={blog.hand_imgUrl} alt="" id='Popular_img' />
                                </div>

                                <div className="col-7">
                                    <h4>{blog.hand_title}</h4>
                                    {/* <p className='text-secondary'>{blog.timestamp.toDate().toDateString()}</p> */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default MostPop