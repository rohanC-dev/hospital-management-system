import React, { useState, useEffect, Component} from 'react'

export default function GetOnePatient() {

    const [patID, setPatID] = useState("")
    const [patient, setPatient] = useState("")

    function getPatient() {
        fetch("http://localhost:8002/patient/" + patID,
            {
                method: 'GET',
                header: {Accept: "application/json", "Content=Type": "application/json"},
            }

        ).then((m) => m.json()).then(setPatient)
    }


        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>

                                <tr>
                                    <td>{JSON.stringify(patient.id)}</td>
                                    <td>{JSON.stringify(patient.name)}</td>
                                    <td>{JSON.stringify(patient.age)}</td>
                                </tr>
                    </tbody>
                </table>

                <p>Patient ID:</p>
                <input type="number" name = "patId" value = {patID} onChange = {x => setPatID(x.target.value)}/>
                <br></br>
                <button onClick = {getPatient}>Get Patient</button>
            </div>
        )

}