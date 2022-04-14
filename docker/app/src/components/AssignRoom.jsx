import React, {useState, useEffect} from 'react'

export default function AssignRoom() {

    const [roomID, setRoomID] = useState("")
    const [patID, setPatID] = useState("")


    function assignRoom() {
        fetch("http://localhost:8002/room/" + roomID + "?patient_id=" + patID,
            {
                method: 'PUT',
                header: {Accept: "application/json", "Content=Type": "application/json"},
            }

        ).then((m) => console.log(m))


    }

  return (
    <div>
        
        <p>Room ID:</p>
        <input type = "number" name = "roomId" value = {roomID} onChange ={x=> setRoomID(x.target.value)} />
        <p>Patient ID:</p>
        <input type = "number" name = "patId" value = {patID} onChange ={x=> setPatID(x.target.value)} />
        <br></br>
        <button onClick={assignRoom}>Assign</button>



    </div>
  )
}
