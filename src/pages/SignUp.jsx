import '../styles/SignUp.css'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function SignUp(){

    const initialSate={name:"" , email:"",pass:""}
    const [signup,setSignup] =useState(initialSate)

    function handlebtn(ev){
        ev.preventDefault()
        setSignup(initialSate)
    }
    return(
        <>
        
        <form className="signup-container" onSubmit={handlebtn}>
            <h1 className="signup-title">Create an account</h1>
            <p className="signup-subtitle">Enter your details below</p>

            <div className="signup-fields">
                <input type="text" placeholder="Name" required  value={signup.name} onChange={(ev) => setSignup({...signup,name:ev.target.value})}/>
                <input type="email" placeholder="Email" required value={signup.email} onChange={(ev) => setSignup({...signup,email:ev.target.value})}/>
                <input type="password" placeholder="password" required  value={signup.pass} onChange={(ev) => setSignup({...signup,pass:ev.target.value})}/>
            </div>

            <div className="signup-actions">
                <button className='signup-btn' type='submit'>Create Account</button>
                <button className='google-btn'>
                    <FcGoogle/>
                    Sign Up with Google
                    </button>

                <div className="signup-login-link">
                    <p>Already have account ?</p>
                    <Link to='/login' className="login-link">Log in</Link>
                </div>
            </div>
        </form>
        </>
    )
}