import React from 'react'
import "./calform.css" 

let baseURL= "http://localhost:3001"

const handleSubmit = (event) => {
  event.preventDefault()
  fetch(baseURL + '/food', {
    method: 'POST',
    body: JSON.stringify({name: " "}),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then (res => res.json())
    .then (resJson => {
      console.log('NewForm - resJson', resJson) // this will be replaced with this.handleAddHolidy once App has passed it down
     
  })
}



function CalForm() {
  return (


<form className="cal-form" onSubmit={handleSubmit}>
   <div className="form-inner">
       <input type="number" name="cal" id="cal"
       placeholder='Add Calories'/>
       <input type ="number" name="protein" id="protein"
       placeholder="Add Protien"/>
       <input type = "number" name="carbs" id="carbs"
       placeholder='Add Carbs'/>
       <input type="number" name="fats" id="fats"
       placeholder='Add Fats'/>
       <input type="date" name="date" id="date" placeholder="Date"/>
       <input type="submit" value="Add Macros"/>
    </div> 
</form>
    


  )
}

export default CalForm