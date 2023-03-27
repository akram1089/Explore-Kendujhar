import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../../database/firebase'
import 'react-toastify/dist/ReactToastify.css';

const Signup = ({Dismiss_signup}) => {


 

    const initialState = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: ""
    }

    const [state, setstate] = useState(initialState)

    const { fname, lname, email, password, cpassword } = state
    const navigate = useNavigate()
    const handleFname = (e) => {
        setstate({ ...state, fname: e.target.value })

    }
    const handleLname = (e) => {
        setstate({ ...state, lname: e.target.value })

    }
    const handleEmail = (e) => {
        setstate({ ...state, email: e.target.value })

    }
    const handlePassword = (e) => {
        setstate({ ...state, password: e.target.value })

    }
    const handleCpassword = (e) => {
        setstate({ ...state, cpassword: e.target.value })

    }


    const handleAuth = async (e) => {
        e.preventDefault()

        if (password !== cpassword) {
            return toast.error('Password does not match  !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        if (fname && lname && email && password) {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(user, { displayName: `${fname} ${lname}` })
            Dismiss_signup.current.click()
            return toast.success('You account is created succesfully   !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            toast.error('All fields are required !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        navigate("/")
    }
    return (
        <>

            <h3 className='text-success text-center'>Sing up here with you email</h3>
            <form action="">
                <div className="name d-flex">
                    <div class="form__group field">
                        <input type="input" value={fname} onChange={handleFname} class="form__field text-dark" placeholder="First name" name="fname" id='name' required style={{ width: "100%" }} />
                        <label for="name" class="form__label">First name</label>
                    </div>
                    <div class="form__group field">
                        <input type="input" value={lname} onChange={handleLname} class="form__field text-dark" placeholder="Last name" name="lname" id='name' required style={{ width: "100%" }} />
                        <label for="name" class="form__label">Last name</label>
                    </div>
                </div>
                <div class="form__group field">
                    <input type="email" value={email} onChange={handleEmail} class="form__field text-dark" placeholder="Email " name="email" id='name' required />
                    <label for="name" class="form__label">Email</label>
                </div>   <div class="form__group field">
                    <input type="password" value={password} onChange={handlePassword} class="form__field text-dark" placeholder="Password" name="password" id='name' required />
                    <label for="name" class="form__label">Password</label>
                </div>   <div class="form__group field">
                    <input type="password" value={cpassword} onChange={handleCpassword} class="form__field text-dark" placeholder="Confirm Password " name="cpassword" id='name' required />
                    <label for="name" class="form__label">Confirm Password</label>
                </div>
                <button class="button-37 mt-3 text-center" onClick={handleAuth} type="submit">Sign up </button>
            </form>
            <div class="modal-footer">
                <span className='text-dark text-center'>Already have and account ? </span>
                <a href="#" class="text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Sign in </a>
            </div>
        </>
    )
}

export default Signup