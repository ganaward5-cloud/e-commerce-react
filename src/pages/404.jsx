import { Link } from 'react-router-dom'
import '../styles/NotFound.css'

export default function NotFound(){

    return(
        <>
        <div className="notfound-container">
            <h1 className="notfound-title">404 Not Found</h1>
            <p className="notfound-text">Your visited page not found. You may go home page.</p>
            <button><Link to="/" className="notfound-btn">Back To Home Page</Link></button>
        </div>
        </>
    )
}