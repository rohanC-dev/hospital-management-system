import React, { useState, useEffect, Component} from 'react'
import {render} from "react-dom";

export default function GetPatients() {

    const [patients, setPatients] = useState("")
    const [loading, setLoading] = useState(false)

    /*const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>
					<td>{info.name}</td>
					<td>{info.city}</td>
				</tr>
			)
		}
	)*/

    function getPatients() {
        setLoading(true)
        fetch("http://localhost:8002/patients",
            {
                method: 'GET',
                header: {Accept: "application/json", "Content=Type": "application/json"},
            }

        ).then((m) => m.json()).then(setPatients)
            .then(setLoading(false))
    }

    

    useEffect(() => {
        setLoading(true)
        getPatients()
    }, [])

    if(loading){
        return <h1>Loading...</h1>
    }
    if(Array.isArray(patients)){
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
                        {patients.map((patient, i) =>
                                <tr key = {i}>
                                    <td>{patient.id}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.age}</td>
                                </tr>
                        )}
                    </tbody>
                </table>

                <button onClick = {getPatients}>Update</button>
            </div>
        )
    }





}




