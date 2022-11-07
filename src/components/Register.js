import { useNavigate } from "react-router"

function Register  ()  {

  let navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    console.log("eTarget", e.target)
    fetch("http://localhost:3001/register", {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      navigate("/macros")
    
      })
    }
  


    return (
      <div>
  <h1> Register </h1>


  
  <h1 className="h1-register">CREATE AN ACCOUNT</h1>
        <form onSubmit={handleRegister}>
          <label className="label1" htmlFor="name">Username: </label>
            <input id="username" name="username" className="username" type="text" placeholder="username" />
          <label className="label1" htmlFor="name">Email: </label>
            <input  id="email" name="email" className="email" type="email" placeholder="email" />
          <label className="" htmlFor="name">Password: </label>
            <input id="password" name="password" className="password" type="password" placeholder="password" />
          <input className="registerButton" type="submit" value="Register" />

        </form>
  <h1> Hey </h1>
  
      </div>
    )
  }

  
  
  
  
  export default Register;