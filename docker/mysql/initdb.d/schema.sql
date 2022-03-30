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