import React from 'react'
import "./header.css"


function Header({totalCal, totalPro}) {

  return (
    <header>
        <h1 className="cal-trac"> TracMac </h1>
        <div className="total-cal"> Total Calories: {totalCal} 
        <div className="total-cal"> Protein: {totalPro} </div>
        </div>

    </header>

  )
}

export default Header