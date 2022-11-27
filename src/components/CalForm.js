import React from 'react'
import { useEffect } from 'react'
import "./calform.css" 
import Header from "../components/Header"
import App from "../App"


let baseURL= "http://localhost:3001"

const handleSubmit = (e) => {
  e.preventDefault()
  fetch(baseURL + '/food', {
    method: 'POST',
    body: JSON.stringify({
     name: e.target.name.value,
     calories: e.target.cal.value,
     protein: e.target.protein.value,
     carbohydrate: e.target.carbs.value,
     fat: e.target.fats.value
  }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then (res => res.json())
    .then (resJson => {
      console.log('NewForm - resJson', resJson)
     
  })
}


function CalForm() {


  return (
<div>

<form className="cal-form" onSubmit={handleSubmit}>
   <div className="form-inner">
     <input type="text" name="name" id="name"
       placeholder='Add Name'/>
       <input type="number" name="cal" id="cal"
       placeholder='Add Calories'/>
       <input type ="number" name="protein" id="protein"
       placeholder="Add Protein"/>
       <input type = "number" name="carbs" id="carbs"
       placeholder='Add Carbs'/>
       <input type="number" name="fats" id="fats"
       placeholder='Add Fats'/>
       <input type="submit" value="Add Macros"/>
    </div> 
</form>

    
    
</div>

  )
}

export default CalForm