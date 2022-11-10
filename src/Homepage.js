import { useNavigate } from "react-router"
import Register from "./components/Register"

 function Homepage () {

let navigate = useNavigate()

const handleClick = () => {
    navigate("/macros")

}
  return (
    

      <div>
   

    <div> TracMac Homepage</div>
    <button className="login" > Sign Up </button>
    <button className="login" onClick={handleClick}> Login </button>

    
    </div>
  )
}







export default Homepage;