import { useState, useEffect } from "react"
import Header from "./components/Header"
import CalForm from "./components/CalForm"
import "./App.css"
function App() {

  const [calories, setCal] = useState([])
  const [totalCal, setTotalCal] = useState(0)
  const [food, setFood] = useState([])

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

useEffect (() => {
  const total = food.reduce((foo,cal) => foo + cal.calories, 0)
  setTotalCal(total)
}, [food])


console.log("this is outside" ,food)

  return (
   <div className="main-background">
   
   <Header totalCal={totalCal} />

   <CalForm totalCal={totalCal} 
   calories = {calories}/>

    <ul className="cal-list">
    { food.map(food =>  ( 
      <>
      <li className="cal-item" key={food.id} > Name: {food.name} |  Calories: {food.calories} |
     </li>
 
      </>

    ))}
    </ul> 

  
   
</div>
 
  
  )
}

export default App;
