import React, {useState, useEffect} from 'react'

export default function DeleteOp() {


    function deleteOp() {
        fetch("http://localhost:8003/discharge_patient",
            {
                method: 'PUT',
                header: {Accept: "application/json", "Content=Type": "application/json"},
            }

        ).then((m) => console.log(m))


    }

  return (
    <div>
        
  

        <br></br>
        <button onClick={deleteOp}>Discharge</button>



    </div>
  )
}