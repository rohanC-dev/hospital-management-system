import React, { useState, useEffect, Component} from 'react'

export default function GetStatus() {

    const [rooms, setRooms] = useState([])

    function getRoom() {
        fetch("http://localhost:8003/status",
            {
                method: 'GET',
                header: {Accept: "application/json", "Content=Type": "application/json"},
            }

        ).then((m) => m.json()).then(setRooms)
    }

    useEffect(() => {
        getRoom()
    }, [])


    if(rooms.length != 0){
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
                                <tr>
                                    <td>{JSON.stringify(rooms[0].room_id)}</td>
                                    <td>{JSON.stringify(rooms[0].patient_id)}</td>
                                    <td>{JSON.stringify(rooms[0].occupied)}</td>
                                </tr>
                    </tbody>
                </table>
        <button onClick = {getRoom}>Update</button>
    </div>
        )
    }else{
        return <h1>Loading...</h1>
    }

}