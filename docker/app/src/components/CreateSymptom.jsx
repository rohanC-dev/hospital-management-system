import React, { useState, useEffect } from 'react'

export default function CreateSymptom() {

    const [patID, setPatID] = useState("")
    const [sym, setSym] = useState("")


    function createSymptom() {

        fetch("http://localhost:8001/symptoms?patient_id=" + patID + "&symptom=" + sym,
            {
                method: 'POST',
                header: {Accept: "application/json", "Content=Type": "application/json"},
            }

        ).then((m) => console.log(m))
    }

    /*useEffect(() => {
        createSymptom()
    }, [])*/

  return (
    <div>
        <p>Patient ID:</p>
        <input type = "number" name = "patId" value = {patID} onChange ={a=> setPatID(a.target.value)} />
        <p>Symptom:</p>
        <input type = "text" name = "symptom" value = {sym} onChange ={a=> setSym(a.target.value)} />
        <br></br>
        <button onClick={createSymptom}>Add</button>

    </div>
  )
}