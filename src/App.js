import { useState, useEffect } from "react"
import Header from "./components/Header"
import CalForm from "./components/CalForm"
import "./App.css"
function App() {

  const [calories, setCal] = useState([])
  const [totalCal, setTotalCal] = useState(0)
  const [food, setFood] = useState([])

let baseUrl= "http://localhost:3001"

// Fetching from the backend
const foods = () => {
  fetch(baseUrl + "/food")
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

console.log("this is outside" ,food)

  return (
   <div className="main-background">

  

   <div>
  <ul>
    { food.map(food =>  ( 
      
      <li key={food.id} > {food.name} </li>
    ))}
    </ul> 


   </div> 
  
   <Header totalCal={totalCal} />
   <CalForm />
  
   
 
  </div>
  )
}

export default App;
