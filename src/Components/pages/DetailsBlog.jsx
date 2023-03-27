import "../../App.css"
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../database/firebase'


const DetailsBlog = ({ user }) => {
    const { id } = useParams()
    const [blog, setblog] = useState(null)
    useEffect(() => {
        id && getBlogDetrails()
    }, [id])
    const getBlogDetrails = async () => {
        const docRef = doc(db, 'Blog', id)
        const blogDetail = await getDoc(docRef)
        setblog(blogDetail.data())
    }
    return (
        <>

            <div className="Single">

                <div className="blogImg" ></div>
                <img src={blog?.hand_imgUrl} alt="" style={{ width: " 99.5vw", height: "60vh" }} />
                <h2 className='Details_title'>{blog?.hand_title}</h2>
                <div className="blog_title container mt-4">
                    <span className='fs-3'> By {blog?.author}</span>
                    <span className='text-secondary'> - {blog?.timestamp.toDate().toDateString()}</span>
            
                    <hr />
                    <h5>{blog?.hand_description}</h5>
                </div>
      
            </div>

        </>
    )
}

export default DetailsBlog