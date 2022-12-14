import { useNavigate } from "react-router"
import "./homepage.css" 
import Register from "./components/Register"

 function Homepage () {


let navigate = useNavigate()

const handleClick = () => {
    navigate("/macros")
}

let baseURL= "http://localhost:3001"

    const handleLogin = (e) => {
      e.preventDefault()
      console.log("eTarget", e.target.email.value, e.target.password.value)
      console.log(e.target.email.value)
      fetch(baseURL + '/users/signin', {
        method: 'POST',
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log(res)
        if (res.ok) return res.json()
        console.log(res)
      })
        .then(resJson => {
        console.log("resJson", resJson)
        this.getPins()
      })
    }


  return (
    <div className="background">
    
    <div className="cover">
    {/* <button className="login" > Sign Up </button>
    <button className="login" onClick={handleClick}> Login </button> */}

    <h1>Log In</h1>
    <input className="log-input" type="text" placeholder="E-mail" />
    <input className="log-input" type="password" placeholder="Password" />
    <div className="login-btn" onClick={handleLogin}> Login </div>
    <div className="login-btn"> Register </div>
      

    
    </div>
    </div>
  )
}







export default Homepage;