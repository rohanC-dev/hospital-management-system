import React, { useState, useEffect, Component} from 'react'

export default function GetSymptoms() {

    const [symptoms, setSymptoms] = useState("")

    function getSymptoms() {
        fetch("http://localhost:8001/symptoms",
            {
                method: 'GET',
                header: {Accept: "application/json", "Content=Type": "application/json"},
            }

        ).then((m) => m.json()).then(setSymptoms)
    }

    useEffect(() => {
        getSymptoms()
    }, [])

  if(Array.isArray(symptoms)){
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Symptom</th>
                    </tr>
                    </thead>
                    <tbody>
                        {symptoms.map((symptom, i) =>
                                <tr key = {i}>
                                    <td>{symptom.patient_id}</td>
                                    <td>{symptom.symptom}</td>
                                </tr>
                        )}
                    </tbody>
                </table>

                <button onClick = {getSymptoms}>Update</button>
            </div>
        )
    }else{
      return <h1>Loading...</h1>
  }
}