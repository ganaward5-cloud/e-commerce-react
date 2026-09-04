import '../styles/LogIn.css'
import { useState } from 'react'

export default function LogIn (){
    const initialState={email:"" , pass:""}
    const [login,setLogin] = useState({email:"" , pass:""})
    

    function handlebtn(ev){
         ev.preventDefault()
        setLogin(initialState)
    }
    return(
        <>
        <form className="login-container" onSubmit={handlebtn} >
            <h1 className="login-title">Log in to Exclusive</h1>
            <p className="login-subtitle">Enter your details below</p>

            <div className="login-fields">
                <input type="email" placeholder="Email" required value={login.email} onChange={(ev) =>setLogin({...login,email:ev.target.value})}/>
                <input type="password" placeholder="Password"  required value={login.pass} onChange={(ev) =>setLogin({...login,pass:ev.target.value})}/>
            </div>

            <div className="login-actions">
                <button className="login-btn" type='submit' onClick={handlebtn}> Log in</button>
                <p className="login-forgot">Forget password?</p>
            </div>
        </form>
        </>
    )
}