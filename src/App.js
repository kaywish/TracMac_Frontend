import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import Header from "./components/Header"
import CalForm from "./components/CalForm"
import EditForm from "./components/EditForm"
import "./App.css"



function App() {

  const [calories, setCal] = useState([])
  const [totalCal, setTotalCal] = useState(0)
  const [totalPro, setTotalPro] = useState(0)
  const [food, setFood] = useState([])
  const [buttonPopup, setButtonPopup] = useState(false)

let baseURL= "http://localhost:3001"

// Fetching from the backend
const foods = () => {
  fetch(baseURL + "/food")
  .then(res => {
    return res.json()
    .then(data => {
      setFood(data.food)
      console.log(data.food)
      
    })
  })
}



useEffect(() => {
  foods();
  
}, []);

const handleDelete= (id) => {
  fetch(baseURL+ "/food/" + "638366ea5020c7fce06ebaef", {
    method: "DELETE"
  }).then((res) => {
    console.log(res)
    res.json().then((resp) => {
      console.log(resp)
      foods()
    })
  } )


}



useEffect (() => {
  const total = food.reduce((food,cal) => food + cal.calories, 0)
  setTotalCal(total)
}, [food])

useEffect (() => {
  const total = food.reduce((food,pro) => food + pro.protein, 0)
  setTotalPro(total)
}, [food])


// console.log("this is outside" ,food)

  return (
   <div className="main-background">
   
   <Header totalCal={totalCal}
   totalPro={totalPro} />

   <CalForm totalCal={totalCal} 
   calories = {calories}
   />

   {/* <EditForm trigger={buttonPopup} setTrigger={setButtonPopup} /> */}
   
 
  


    <ul className="cal-list">
    { food.map(food =>  ( 
      <>
      <li className="cal-item" key={food.id} > Name: {food.name} |  Calories: {food.calories} | Protein:  {food.protein} 
       
      <h4>  <Link to={`/edit/${food._id}`} > Edit </Link>  </h4>
      
      <button onClick={(e)=> handleDelete(food._id)}> Delete </button>
     </li>
 
      </>

    ))}
    </ul> 

   

  
   
</div>
 
  
  )
}

export default App;
