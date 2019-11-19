var readline=require('readline-sync')
var fs=require('fs');

var doctorInfo=fs.readFileSync("/home/user/Vaibhav/JavaScriptPrograms/CliniqueManagment/doctor.json");
var doctorData=JSON.parse(doctorInfo);

var patientInfo=fs.readFileSync("/home/user/Vaibhav/JavaScriptPrograms/CliniqueManagment/patient.json");
var patientData=JSON.parse(patientInfo);

var appoinmentInfo=fs.readFileSync("/home/user/Vaibhav/JavaScriptPrograms/CliniqueManagment/appointment.json");
var appoinmentData=JSON.parse(appoinmentInfo);

var util=require('./CliniqManagement');
var objClinique=new util.CliniqueManagement();

function cliniqueManage()
{
    let choice=0;
    do{

        console.log("Clinic Management")
        console.log("1.Add Doctor\n2.Take appointment\n3.Search doctor\n4.Search Patient\n5.Delete Doctor\n6.Delete Patient\n7.Display Doctor\n8.Display Patient\n9.Exit");
        console.log("Enter your choice..")
        choice=readline.questionInt();
    
        switch(choice)
        {
            case 1:
                objClinique.addDoctor(doctorData);
            break;

            case 2:
                objClinique.takeAppointment(patientData,doctorData,appoinmentData);
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
                console.log("wrong choice");
                
        }

    }while(choice!=9)
   

}

module.exports=cliniqueManage()