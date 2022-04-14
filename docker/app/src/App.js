import logo from './logo.svg';
import './App.css';
import GetPatients from './components/GetPatients';
import GetOnePatient from './components/GetOnePatient';
import DeletePatient from './components/DeletePatient';
import CreatePatient from './components/CreatePatient';
import GetRooms from './components/GetRooms';
import AssignRoom from './components/AssignRoom';
import GetSymptoms from './components/GetSymptoms';
import CreateSymptom from './components/CreateSymptom';
import GetStatus from './components/GetStatus';
import AssignOperation from './components/AssignOperation';
import DeleteOp from './components/DeleteOp';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>List of all Patients</h2>
        <GetPatients />
        <hr></hr>
        <h2>Get Specific Patient by ID</h2>
        <GetOnePatient />
        <hr></hr>
        <h2>Dispatch Patient by ID</h2>
        <DeletePatient />
        <hr></hr>
        <h2>Add Patient</h2>
        <CreatePatient />
        <hr/>
        <h2>List of all Rooms</h2>
        <GetRooms />
        <hr/>
        <h2>Assign Patient to Room</h2>
        <AssignRoom />
        <hr/>
        <h2>Patients and their Symptoms</h2>
        <GetSymptoms />
        <hr/>
        <h2>Assign Symptom to Patient</h2>
        <CreateSymptom />
        <hr/>
        <h2>Get Status of Operating Room</h2>
        <GetStatus />
        <hr/>
        <h2>Assign Patient to Operating Room</h2>
        <AssignOperation />
        <hr/>
        <h2>Discharge Patient from Opertaion Room</h2>
        <DeleteOp />
      </div>
    </div>
  );
}

export default App;
