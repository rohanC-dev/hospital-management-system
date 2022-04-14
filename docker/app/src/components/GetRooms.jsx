import React, { useState, useEffect, Component} from 'react'

export default function GetRooms() {

    const [rooms, setRooms] = useState("")

    function getRooms() {
        fetch("http://localhost:8002/rooms",
            {
                method: 'GET',
                header: {Accept: "application/json", "Content=Type": "application/json"},
            }

        ).then((m) => m.json()).then(setRooms)
    }

    useEffect(() => {
        getRooms()
    }, [])



    if(Array.isArray(rooms)){
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Room ID</th>
                        <th>Patient ID</th>
                        <th>Occupied</th>
                    </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room, i) =>
                                <tr key = {i}>
                                    <td>{room.room_id}</td>
                                    <td>{room.patient_id}</td>
                                    <td>{JSON.stringify(room.occupied)}</td>
                                </tr>
                        )}
                    </tbody>
                </table>

                <button onClick = {getRooms}>Update</button>
            </div>
        )
    }else{
        return <h1>Loading...</h1>
    }
}