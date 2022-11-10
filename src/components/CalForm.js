import React from 'react'

function CalForm() {
  return (
<form className="cal-form">
   <div className="form-inner">
       <input type="number" name="cal" id="cal"
       placeholder='Add Calories'/>
       <input type ="number" name="protein" id="protein"
       placeholder="Add Protien"/>
       <input type = "number" name="carbs" id="carbs"
       placeholder='Add Carbs'/>
       <input type="number" name="fats" id="fats"
       placeholder='Add Fats'/>
       </div> 
</form>
    


  )
}

export default CalForm