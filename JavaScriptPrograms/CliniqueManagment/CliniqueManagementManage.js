let readline = require('readline-sync')
let fs = require('fs');


let doctorInfo = fs.readFileSync("/home/user/Vaibhav/JavaScriptPrograms/CliniqueManagment/doctor.json");
let doctorData = JSON.parse(doctorInfo);

let patientInfo = fs.readFileSync("/home/user/Vaibhav/JavaScriptPrograms/CliniqueManagment/patient.json");
let patientData = JSON.parse(patientInfo);

let appoinmentInfo = fs.readFileSync("/home/user/Vaibhav/JavaScriptPrograms/CliniqueManagment/appointment.json");
let appoinmentData = JSON.parse(appoinmentInfo);

let util = require('./CliniqManagement');
let objClinique = new util.CliniqueManagement();

 cliniqueManage=()=> {
    let choice = 0;
    do {

        console.log("Clinic Management")
        console.log("1.Add Doctor\n2.Take appointment\n3.Search doctor\n4.Search Patient\n5.Delete Doctor\n6.Delete Patient\n7.Display Doctor\n8.Display Patient\n9.Exit");
        console.log("Enter your choice..")
        choice = readline.questionInt();

        switch (choice) {
            case 1:
                objClinique.addDoctor(doctorData);
                break;

            case 2:
                objClinique.takeAppointment(patientData, doctorData, appoinmentData);
                break;

            case 3:
                objClinique.searchDoctor(doctorData);
                break;

            case 4:
                objClinique.searchPatient(patientData);
                break;

            case 5:
                objClinique.deleteDoctor(doctorData);
                break;

            case 6:
                objClinique.deletePatient(patientData);
                break;

            case 7:
                objClinique.displayDoctor(doctorData);
                break;

            case 8:
                objClinique.displayPatient(patientData);
                break;

            case 9:
                console.log("Thank you");
                break;


            default:
                console.log("Please enter valid choice");

        }

    } while (choice != 9)


}

module.exports = cliniqueManage()