import React, { useState, useEffect } from 'react'

export default function CreatePatient() {

    const [id, setID] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")


    function createPatient() {

        fetch("http://localhost:8002/patient/?id=" + id + "&name=" + name + "&age=" + age,
            {
                method: 'POST',
                header: {Accept: "application/json", "Content=Type": "application/json"},
            }

        ).then((m) => console.log(m))
    }

    /*IuseEffect(() => {
        createPatient()
    }, [])*/

  return (
    <div>
        <p>Patient ID:</p>
        <input type = "number" name = "id" value = {id} onChange ={a=> setID(a.target.value)} />
        <p>Name:</p>
        <input type = "text" name = "name" value = {name} onChange ={a=> setName(a.target.value)} />
        <p>Age:</p>
        <input type = "number" name = "age" value = {age} onChange ={a=> setAge(a.target.value)} />
        <br></br>
        <button onClick={createPatient}>Add</button>

    </div>
  )
}
