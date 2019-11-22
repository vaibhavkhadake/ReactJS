let readline = require('readline-sync');
let fs = require('fs');

class CliniqueManagement {
    addDoctor (doctorData) {
        console.log("Enter Doctor name");
        let doctorName = readline.question();

        console.log("Enter Doctor ID");
        let doctorId = readline.questionInt();

        console.log("Doctor Specialization");
        let doctorSpecialization = readline.question();

        console.log("Enter Doctor Avaibility [am] or [pm]");
        let doctorAvailability = readline.question().toUpperCase();

        doctorData.push({
            "DoctorName": doctorName,
            "DoctorId": doctorId,
            'DoctorAvailability': doctorAvailability,
            "DoctorSpecialization": doctorSpecialization,
            "PatientSize": 0
        })

        fs.writeFileSync('doctor.json', JSON.stringify(doctorData))

        return [doctorName, doctorId, doctorSpecialization, , doctorAvailability]
    }

    addPatient(patientData) {
        console.log("Patient ID ");
        let patientId = readline.questionInt();
        console.log("Patient name");
        let patientName = readline.question();
        console.log("Patient mobile number");
        let patientMobileNumber = readline.questionInt();
        console.log("Patient age");
        let patientAge = readline.questionInt();

        patientData.push(
            {
                "PatientId": patientId,
                "PatientName": patientName,
                "PatientMobileNumber": patientMobileNumber,
                "PatientAge": patientAge
            }
        )
        fs.writeFileSync('patient.json', JSON.stringify(patientData));
        return patientName
    }

    takeAppointment(patientData, doctorData, appointmentData) {
        console.log("Search patients details");
        let patientSearch = this.searchPatient(patientData);
        if (patientSearch != -1) {
            console.log("Patient found");
            this.takeNewAppointment(doctorData, patientSearch, appointmentData);
        }
        else {
            console.log("Patient not found");
            console.log("please register");
            let patientName = this.addPatient(patientData)
            console.log("New patient added ");

            this.takeNewAppointment(doctorData, patientName, appointmentData);
        }
    }

    takeNewAppointment(doctorData, patientName, newAppoinmentData) {
        let flag = 0;
        console.log("Display Doctor List");
        this.displayDoctor(doctorData);

        console.log("Please enter doctor name which you want");
        let doctorName = readline.question();

        for (let i = 0; i < doctorData.length; i++) {
            if (doctorData[i].DoctorName.toUpperCase() === doctorName.toUpperCase()) {
                console.log("Please enter time slot [ am ] or [ pm ] for appointment");
                let timeSlot = readline.question().toUpperCase();

                if (doctorData[i].DoctorAvailability === timeSlot) {
                    if (doctorData[i].PatientSize < 5) {
                        newAppoinmentData.push(
                            {
                                "PatientName": patientName,
                                "DoctorName": doctorData[i].DoctorName,
                                "TimeSlot": timeSlot
                            }
                        )
                        fs.writeFileSync('appointment.json', JSON.stringify(newAppoinmentData));

                        doctorData[i].PatientSize = doctorData[i].PatientSize + 1;
                        fs.writeFileSync('doctor.json', JSON.stringify(doctorData));
                        console.log("appoinment Successfully");
                    }
                    else {
                        console.log(" Appointment unsuccessfully");
                    }
                }
                else {
                    console.log("Doctor is not available", timeSlot);
                }
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            console.log("No such doctor in a hospital");
        }
    }
    searchPatient(patientData) {
        let choice;
        console.log("Search Patient");
        console.log("1.Id \n2.Name \n3.MobileNumber \n4.Age");
        console.log("Enter your choice");
        choice = readline.questionInt();

        switch (choice) {
            case 1:
                console.log("Enter patient Id");
                let patientId = readline.questionInt();

                for (let i = 0; i < patientData.length; i++) {
                    if (patientData[i].PatientId == patientId) {
                        console.log("Patient Id", patientData[i].PatientId);
                        console.log("Patient name", patientData[i].PatientName);
                        console.log("Patient mobile Number", patientData[i].PatientMobileNumber);
                        console.log("Patient age", patientData[i].PatientAge);

                        return patientData[i].PatientName
                    }
                }
                break;

            case 2:
                console.log("Enter patient Name");
                let patientName = readline.question();

                for (let i = 0; i < patientData.length; i++) {
                    if (patientData[i].PatientName == patientName) {
                        console.log("Patient Id", patientData[i].PatientId);
                        console.log("Patient name", patientData[i].PatientName);
                        console.log("Patient mobile Number", patientData[i].PatientMobileNumber);
                        console.log("Patient age", patientData[i].PatientAge);

                        return patientData[i].PatientName
                    }
                }
                break;

            case 3:
                console.log("Enter patient Mobile Number");
                let patientMobileNumber = readline.questionInt();

                for (let i = 0; i < patientData.length; i++) {
                    if (patientData[i].PatientMobileNumber == patientMobileNumber) {
                        console.log("Patient Id", patientData[i].PatientId);
                        console.log("Patient name", patientData[i].PatientName);
                        console.log("Patient mobile Number", patientData[i].PatientMobileNumber);
                        console.log("Patient age", patientData[i].PatientAge);
                        return patientData[i].PatientName
                    }
                }
                break;

            case 4:
                console.log("Enter patient age");
                let patientAge = readline.questionInt();

                for (let i = 0; i < patientData.length; i++) {
                    if (patientData[i].PatientAge == patientAge) {
                        console.log("Patient Id", patientData[i].PatientId);
                        console.log("Patient name", patientData[i].PatientName);
                        console.log("Patient mobile Number", patientData[i].PatientMobileNumber);
                        console.log("Patient age", patientData[i].PatientAge);

                        return patientData[i].PatientName
                    }
                }                                           
                break;
            default:
                console.log("You entered wrong choice");
        }
        //if patient is found then return -1 and check in takeAppointment method  
        return -1
    }


    searchDoctor(doctorData) {
        let choice;
        console.log("Search Doctor");
        console.log("1.Id \n2.Name \n3.Specilization \n4.Availability");
        console.log("Enter your choice");
        choice = readline.questionInt();

        switch (choice) {
            case 1:
                console.log("Enter doctor ID");
                let doctorId = readline.questionInt();

                for (let i = 0; i < doctorData.length; i++) {
                    if (doctorData[i].DoctorId === doctorId) {
                        console.log("Doctor ", doctorData[i].DoctorId);
                        console.log("Doctor ", doctorData[i].DoctorName);
                        console.log("Doctor ", doctorData[i].DoctorSpecialization);
                        console.log("Doctor ", doctorData[i].doctorAvailability);
                        return doctorData[i].DoctorName
                    }
                }
                break;
            case 2:
                console.log("Enter doctor name");
                let doctorName = readline.question();

                for (let i = 0; i < doctorData.length; i++) {
                    if (doctorData[i].DoctorName === doctorName) {
                        console.log("Doctor ", doctorData[i].DoctorId);
                        console.log("Doctor ", doctorData[i].DoctorName);
                        console.log("Doctor ", doctorData[i].DoctorSpecialization);
                        console.log("Doctor ", doctorData[i].doctorAvailability);
                        return doctorData[i].DoctorName
                    }
                }
                break;
            case 3:
                console.log("Enter doctor Specialization");
                let doctorSpecialization = readline.question();

                for (let i = 0; i < doctorData.length; i++) {
                    if (doctorData[i].DoctorSpecialization === doctorSpecialization) {
                        console.log("Doctor ", doctorData[i].DoctorId);
                        console.log("Doctor ", doctorData[i].DoctorName);
                        console.log("Doctor ", doctorData[i].DoctorSpecialization);
                        console.log("Doctor ", doctorData[i].doctorAvailability);
                        return doctorData[i].DoctorName
                    }
                }
                break;
            case 4:
                console.log("Enter doctor Availability");
                let doctorAvailability = readline.question();

                for (let i = 0; i < doctorData.length; i++) {
                    if (doctorData[i].DoctorAvailability === doctorAvailability) {
                        console.log("Doctor ", doctorData[i].DoctorId);
                        console.log("Doctor ", doctorData[i].DoctorName);
                        console.log("Doctor ", doctorData[i].DoctorSpecialization);
                        console.log("Doctor ", doctorData[i].doctorAvailability);
                        return doctorData[i].DoctorName
                    }
                }
                break;
            default:
                console.log("You enter wrong choice")
        }

    }

    deleteDoctor(doctorData) {
        console.log("Enter doctor name to delete");
        let doctorName = readline.question();

        for (let i = 0; i < doctorData.length; i++) {
            if (doctorData[i].DoctorName === doctorName) {
                doctorData.splice(i, 1)
                break;
            }
        }
        fs.writeFileSync('doctor.json', JSON.stringify(doctorData))
    }

    deletePatient(patientData) {
        console.log("Enter patient name to delete");
        let patientName = readline.question();

        for (let i = 0; i < patientData.length; i++) {
            if (patientData[i].PatientName === patientName) {
                patientData.splice(i, 1)
                break;
            }
        }
        fs.writeFileSync('patient.json', JSON.stringify(patientData))
    }


    displayDoctor(doctorData) {
        for (let i = 0; i < doctorData.length; i++) {
            console.log(doctorData[i]);
        }
    }

    displayPatient(patientData) {
        for (let i = 0; i < patientData.length; i++) {
            console.log(patientData[i]);
        }
    }
}

module.exports = {
    CliniqueManagement
}