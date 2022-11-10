import { useState } from "react"
import Header from "./components/Header"
import CalForm from "./components/CalForm"
function App() {

  const [calories, setCal] = useState([])
  const [totalCal, setTotalCal] = useState(0)


  return (
   <div>

   <h1> TracMac </h1>
   <Header totalCal={totalCal} />
   <CalForm />
  
   
 
  </div>
  )
}

export default App;
