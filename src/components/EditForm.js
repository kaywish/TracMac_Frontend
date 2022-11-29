
import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"


function EditForm(props) {

let baseURL= "http://localhost:3001"

const [food, setFood] = useState([])
// food is an array of food objects 

let { id } = useParams();
// console.log(useParams())


const foods = () => {
    fetch(baseURL + "/food")
    // console.log(baseURL + "/food/" + id)
    .then(res => res.json())
      .then(data => {
        setFood(data.food)
        // data.food is an array of food objects 
        console.log(data.food)
        
      })
    }


  

// const handleSubmit = (e, ) => {
//         e.preventDefault()
//         console.log(e)
//         fetch(baseURL +'/food/' + food._id
        
//         , {
//             method: 'PUT',
//             body: JSON.stringify({
//                 name: e.target.name.value
//                 // calories: e.target.cal.value,
//                 // protein: e.target.protein.value,
//                 // carbohydrate: e.target.carbs.value,
//                 // fat: e.target.fats.value
//             }),
//             headers: {
//               'Content-Type' : 'application/json'
//             }
//         })
//         .then(res => {
//             if (res.ok) {
//                 return res.json()
//                 console.log(res)
//             }
//         })
//         .then(resJson => {
//           food.name = e.target.name.value
//           console.log(resJson)
//         })
//         .catch(err => (console.log(err)))
     
//     }
useEffect(() => {
    foods();
    
  }, []);


const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3001/food/" + id ,{
        method: "PUT",
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: e.target.name.value,
            calories: e.target.cal.value,
            protein: e.target.protein.value,
            carbohydrate: e.target.carbs.value,
            fat: e.target.fats.value
        })
    }).then((result) => {
        console.log(result)
        result.json().then((res) => {
            console.log(res)
        })
    })
    

}





      
  return  (
      

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


      
    </div> 
</form>
 </div>



    // <div className='edit-button'>
    // <button onClick= {handleSubmit}> Edit Macros</button>
    // </div>



  ) 

}

export default EditForm