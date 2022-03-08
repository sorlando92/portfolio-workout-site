
import Header from "./Header.js"
import Workout from "./Workout"
import React, { useEffect } from "react"

function Programming() {

  const [search, newSearch] = React.useState("")
  const [wod, setWod] = React.useState([])

  useEffect(() => {
    const arrWorkouts = Array.from(require("./Workouts.json"))
    let formattedWorkouts = new Array()

    if (search) {
      formattedWorkouts = arrWorkouts.filter(val => {
        if (val.pstrWODHeader.toLowerCase().includes(search.toLowerCase()) ||
          val.pstrWODBody.toLowerCase().includes(search.toLowerCase()) ||
          val.pstrWODNote.toLowerCase().includes(search.toLowerCase()) ||
          val.pstrCoachNote.toLowerCase().includes(search.toLowerCase())) {
          console.log(search)
          return val
        }
      })
    }
    else {
      formattedWorkouts = arrWorkouts
    }

    setWod(formattedWorkouts.map(item => {
      return (
        <Workout
          key={item.pintKey}
          workout={item}
        />
      )
    }))
  }, [search])

  return (
    <div className="programming">
      <Header />
      <div className="container">
        <div className="search row col-lg-10">
          <input
            placeholder="Filter exercises, movements, style.."
            value={search}
            onChange={(e) => { newSearch(e.target.value) }}
          />
        </div>
        <div className="row col-lg-10 d-flex justify-content-center">
          {wod}
        </div>
      </div>
    </div>
  );
}

export default Programming;
