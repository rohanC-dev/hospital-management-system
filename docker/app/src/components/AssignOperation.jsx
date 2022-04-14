import React, {useState, useEffect} from 'react'

export default function AssignOperation() {

    const [patID, setPatID] = useState("")


    function assignOp() {
        fetch("http://localhost:8003/assign_patient?patient_id=" + patID,
            {
                method: 'PUT',
                header: {Accept: "application/json", "Content=Type": "application/json"},
            }

        ).then((m) => console.log(m))


    }

  return (
    <div>
        
        <p>Patient ID:</p>
        <input type = "number" name = "patId" value = {patID} onChange ={x=> setPatID(x.target.value)} />
        <br></br>
        <button onClick={assignOp}>Assign</button>



    </div>
  )
}
