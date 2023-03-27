import React from 'react'
import { useNavigate } from 'react-router-dom';
// import Error from "../images/Error.jpg"
import { TypeAnimation } from 'react-type-animation';
const ErrorPage = () => {

    const navigate = useNavigate()

    const Visit_home = () => {
        navigate("/")
    }
    return (
        <>
            <div className="Error " style={{ width: "100vw", height: "100vh" }}>


                <TypeAnimation
                    className='fs-1'
                    sequence={[
                        ' Your Requested page is not found', // Types 'One'
                        1000, // Waits 1s
                        'Please click down below to visit Home page', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s

                        () => {
                            // Place optional callbacks anywhere in the array
                        }
                    ]}

                    cursor={true}
                    repeat={Infinity}
                    style={{ color: "White", left: "15%", position: "absolute", top: "40%", background: "#132e453b" }}

                />
                <div className="visit_home">

                    <button onClick={Visit_home} className='button btn btn-outline-success' style={{
                        position: "absolute",
                        top: "56%",
                        left: " 43%"
                    }} >Visit Home</button>
                </div>
            </div>
        </>
    )
}

export default ErrorPage