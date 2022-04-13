INSERT INTO patient (id, name, age) VALUES (11134, "Bob", 15);
INSERT INTO patient (id, name, age) VALUES (16134, "Ted", 18);
INSERT INTO patient (id, name, age) VALUES (17134, "Joe", 20);

INSERT INTO room (room_id, patient_id, occupied) VALUES (294, NULL, FALSE);
INSERT INTO room (room_id, patient_id,  occupied) VALUES (295, NULL, FALSE);
INSERT INTO room (room_id, patient_id,  occupied) VALUES (296, NULL, FALSE);

INSERT INTO symptom (patient_id,  symptom) VALUES (11134, "Sore Throat");
INSERT INTO symptom (patient_id,  symptom) VALUES (16134, "Fever");
INSERT INTO symptom (patient_id,  symptom) VALUES (17134, "COVID-19");

INSERT INTO operating_room (room_id, patient_id,  occupied) VALUES (233, NULL, FALSE);