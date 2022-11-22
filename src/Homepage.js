import { useNavigate } from "react-router"
import "./homepage.css" 
import Register from "./components/Register"

 function Homepage () {

let navigate = useNavigate()

const handleClick = () => {
    navigate("/macros")

}
  return (
    <div className="background">
    
    <div className="cover">
    {/* <button className="login" > Sign Up </button>
    <button className="login" onClick={handleClick}> Login </button> */}

    <h1>Log In</h1>
    <input className="log-input" type="text" placeholder="E-mail" />
    <input className="log-input" type="password" placeholder="Password" />
    <div className="login-btn" onClick={handleClick}> Login </div>
      

    
    </div>
    </div>
  )
}







export default Homepage;