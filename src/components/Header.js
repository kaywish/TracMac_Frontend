import React from 'react'

function Header({totalCal}) {

  return (
    <header>
        <h1> Calorie Tracker  </h1>
        <div className="total-cal"> Total Calories: {totalCal} 
        </div>

    </header>

  )
}

export default Header