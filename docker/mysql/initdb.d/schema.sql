CREATE TABLE patient (
    id INT NOT NULL,
    name VARCHAR(30) NOT NULL,
    age INT,
    PRIMARY KEY (id)
);

CREATE TABLE room (
    room_id INT,
    patient_id INT,
    occupied BOOLEAN,
    PRIMARY KEY (room_id)
);

CREATE TABLE symptom (
    patient_id INT,
    symptom VARCHAR(30)
);

CREATE TABLE operating_room (
    room_id INT,
    patient_id INT,
    occupied BOOLEAN,
    PRIMARY KEY (room_id)
);
