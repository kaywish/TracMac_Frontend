import React from 'react'

function EditForm(props) {

let baseURL= "http://localhost:3001"

const handleSubmit = (e, index) => {
        e.preventDefault()
        console.log(e)
        fetch(baseURL +'/food/:id' , {
            method: 'PUT',
            body: JSON.stringify({
                name: e.target.name.value,
                calories: e.target.cal.value,
                protein: e.target.protein.value,
                carbohydrate: e.target.carbs.value,
                fat: e.target.fats.value
            }),
            headers: {
              'Content-Type' : 'application/json'
            }
        })
        .then(res => {
            return res.json()})
            
    }


  return (props.trigger) ? (
      

<div>
<form className="edit-form" onSubmit={handleSubmit}>
   <div className="edit-inner">
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
       <input type="submit" value="Edit Macros"/>
       <button className='close-btn'> Close </button>
       { props.children }
    </div> 
</form>
 </div>



    // <div className='edit-button'>
    // <button onClick= {handleSubmit}> Edit Macros</button>
    // </div>



  ) : ""

}

export default EditForm