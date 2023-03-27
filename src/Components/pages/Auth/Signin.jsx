import React, { useState } from 'react'
import "../../../App.css"
import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../database/firebase'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Signin = () => {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [email, setemail] = useState("")

    const emailhandle = (e) => {
        setemail(e.target.value)
    }
    const passwordhandle = (e) => {
        setPwd(e.target.value)
    }
    const Loginhandle = async (e) => {
        e.preventDefault()
        if (email && pwd) {
            const { user } = await signInWithEmailAndPassword(auth, email, pwd)
            return toast.success('Welcome to explore kendujhar !', {
                position: toast.POSITION.TOP_CENTER
            });

        }
        // else if (email === user.email || !pwd){
        //     toast.error('Please corrent your input !', {
        //         position: toast.POSITION.TOP_CENTER
        //     });
        // }
        else {
            toast.error('All fields are required !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }
    return (
        <>
            <form action="">
                <div class="form__group field">
                    <input type="input" class="form__field text-dark" value={email} onChange={emailhandle} placeholder="Email" name="name" id='name' required />
                    <label for="name" class="form__label">Email</label>
                </div>
                <div class="form__group field">
                    <input type={isRevealPwd ? "text" : "password"}
                        value={pwd}
                        onChange={passwordhandle}
                        class="form__field text-dark" placeholder="Password" name="name" id='name' required />
                    <label for="name" class="form__label">Password</label>

                    <div className='text-dark ' onClick={() => setIsRevealPwd(prevState => !prevState)} id="password_visible">
                        {isRevealPwd ? <FiEyeOff /> : <FiEye />}
                    </div>

                </div> <br />
                <button class="button-37" type="submit" onClick={Loginhandle} >Sign in</button>


                <div className="forgot_signup_senction text-center mt-3">



                </div>
            </form>
          

            
        </>
    )
}

export default Signin