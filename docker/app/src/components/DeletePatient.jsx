import React, { useState, useEffect, Component} from 'react'

export default function DeletePatient() {

    const [patID, setPatID] = useState("")

    function deletePatient() {
        fetch("http://localhost:8002/patient/" + patID,
            {
                method: 'DELETE',
                header: {Accept: "application/json", "Content=Type": "application/json"},
            }

        ).then((m) => console.log(m))
    }


  return (
    <div>
        <p>Patient ID:</p>
        <input type="number" name = "patId" value = {patID} onChange = {x => setPatID(x.target.value)}/>
        <br></br>
        <button onClick = {deletePatient}>Dispatch Patient</button>
    </div>
  )
}