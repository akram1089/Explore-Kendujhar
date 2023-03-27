import React, { useId, useRef, useState, useEffect } from 'react'
import nav_icon from './images/nav-icon.png'
import { CgMenuGridO } from 'react-icons/cg'
import { RxCross2 } from 'react-icons/rx'
import { FcGoogle } from 'react-icons/fc'
import { sendPasswordResetEmail } from 'firebase/auth'
import { Link, NavLink } from 'react-router-dom';
import '../App.css'
import Signup from './pages/Auth/Signup'
import Signin from './pages/Auth/Signin'
import { auth } from './database/firebase'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Nav = ({ user, handleLogout, dismiss_login, Google_signin, login_first }) => {

    const Dismiss_signup = useRef()


const [F_pass, setF_pass] = useState("")
const Forget_pass=(e)=>{
    e.preventDefault()
    sendPasswordResetEmail(auth, F_pass)
    .then(()=>{
        return toast.success('Reset link has been sent to mail ', {
            position: toast.POSITION.TOP_CENTER
        });
    })
}

    const [menu, setmenu] = useState(false)
    const menu_handle = () => {
        if (menu) {
            setmenu(false)
        }
        else {
            setmenu(true)
        }
    }
    const userId = user?.uid
    const [showNav, setshowNav] = useState(false)
    const listenToScroll = () => {
        let heightToHidden = 150;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setshowNav(true);
        } else {
            setshowNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);


    return (
        <>

            <nav className={`d-flex mx-5 fixed-top ${showNav ? "main-nav" : "hero-nav"
                }`}>

                <div className="nav_icons">
                    <div className="nav_menu d-flex">
                        <div className="nav_icon_menu d-flex">
                            <Link to="/"> <img src={nav_icon} alt="" className='nav-icon' /> </Link>
                            <h3 className='logo_details'> <span className='text-success'>E</span>xpl<span className='text-warning'>o</span>re <span className='text-success'>K</span>end<span className='text-warning'>u</span>jhar</h3>
                        </div>
                        <div className="menus" onClick={menu_handle}>
                            {
                                menu ? <RxCross2 /> : <CgMenuGridO />
                            }
                        </div>

                    </div>
                </div>
                <div className={menu ? "naviagtions " : "navigations menu_active "}>
                    <ul className='d-flex'>
                        <NavLink to="/"><li>Home</li></NavLink>
                        <NavLink to="/blog"><li>Blog</li></NavLink>
                        <NavLink to="/about"><li>About Kendujhar</li></NavLink>

                        <NavLink to="/contact"><li>Contact us</li></NavLink>

                        {
                            userId ? <>
                                <div class="dropdown">
                                    <div class=" dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false" id='login_modal'>
                                        Welcome ,    {user?.displayName}
                                    </div>
                                    <ul class="dropdown-menu">
                                        <li><div class="dropdown-item text-dark fs-6" onClick={handleLogout}>Logout</div></li>

                                    </ul>
                                </div>
                            </>
                                : <button className="button btn btn-outline-success" ref={login_first} data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
                        }

                    </ul>
                </div>

            </nav>
            <div class="modal fade" id="exampleModal" tabindex="-1" style={{ display: "none" }} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={dismiss_login}></button>
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <div className="Login_header_content d-flex">
                                    <div className="Login_icon"><img src={nav_icon} alt="Login-Icon" id='login_icon' /></div>
                                    <h3 className='logo_detail text-success'> <span className='text-success'>E</span>xpl<span className='text-warning'>o</span>re <span className='text-success'>K</span>end<span className='text-warning'>u</span>jhar</h3>

                                </div>
                                <hr className='login_hr' />
                                <div className="sign_in_page">
                                    <h3 className='text-dark text-center' id='sign_In'>Sign in to explore more.</h3>
                                    <div className="google_login d-flex">
                                        <FcGoogle className='fs-3' />
                                        <h4 className='text-light' onClick={Google_signin} >Google</h4>
                                    </div>
                                    <div className="login_form">
                                        <Signin />
                                    </div>
                                    <div className="forgot_password">
                                        <a className='text-primary text-center' style={{cursor:"pointer"}} id='forgot_pass' data-bs-toggle="modal" data-bs-target="#forget">Forgotten password?</a>
                                        <hr className='text-dark' />
                                    </div>

                                    <div className="create_account container">


                                        <button class="button-37" data-bs-toggle="modal" href="#exampleModalToggle" >Create an account with email </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModalToggle" aria-labelledby="exampleModalToggleLabel" tabindex="-1" style={{ display: "none" }} aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={Dismiss_signup} ></button>
                        </div>
                        <div class="modal-body">
                            <Signup Dismiss_signup={Dismiss_signup} />
                        </div>


                    </div>
                </div>
            </div>

            <div class="modal fade" id="forget" tabindex="-1" aria-labelledby="forgetLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">

                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form >
                            <div class="modal-body d-flex  flex-column">
                                <h3 className='text-center text-success'>Enter currect email to reset your password</h3>
                                <div class="form__group field">
                                    <input type="email" class="form__field text-dark" onChange={(e)=>setF_pass(e.target.value)} value={F_pass} placeholder="Email" name="name" id='name' required />
                                    <label for="name" class="form__label">Enter you email</label>
                                </div>
                                <br />
                                <button class="button-37 " type="submit" onClick={Forget_pass} >Reset you password</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>


        </>
    )
}

export default Nav