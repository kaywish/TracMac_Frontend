import React from 'react'
import "./header.css"
function Header({totalCal}) {

  return (
    <header>
        <h1 className="cal-trac"> TracMac </h1>
        <div className="total-cal"> Total Calories: {totalCal} 
        </div>

    </header>

  )
}

export default Header