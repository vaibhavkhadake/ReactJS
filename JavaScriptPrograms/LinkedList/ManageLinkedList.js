
let readline = require('readline-sync')
let linkedList = require('./LinkedList')
let objLinkedList = new linkedList.LinkedList()

manageList = () => {
    // let info=fs.readFileSync('file.txt');
    let choice = 0;
    do {
        console.log("1.Add element at last \n2.Add element at first \n3.Add element at position");
        console.log("4.Delete element at last \n5.Delete element at first \n6.Delete element at position");
        console.log("7.Search element in list \n8.Size of list \n9.Dispay All element in list \n10.Exit");
        console.log("Enter your choice");
        choice = readline.questionInt();

        switch (choice) {
            case 1:
                let data1 = readline.questionInt("Enter element");
                objLinkedList.addElementAtLast(data1);
                objLinkedList.displayElement();
                break;
            case 2:
                let data2 = readline.questionInt("Enter element");
                objLinkedList.addElementAtFirst(data2);
                objLinkedList.displayElement();
                break;
            case 3:
                let data3 = readline.questionInt("Enter element");
                let position = readline.questionInt("Enter position");
                objLinkedList.insertAtPosition(data3, position);
                objLinkedList.displayElement();
                break;
            case 4:
                objLinkedList.deleteAtEnd();
                objLinkedList.displayElement();
                break;
            case 5:
                objLinkedList.deleteAtFirst();
                objLinkedList.displayElement();
                break;
            case 6:
                let position2 = readline.questionInt("Enter position");
                objLinkedList.deleteAtPosition(position2);
                objLinkedList.displayElement();
                break;
            case 7:
                let search = readline.questionInt("Enter element");
                objLinkedList.searchElement(search);
                break;
            case 8:
                objLinkedList.sizeOfList();
                break;
            case 9:
                objLinkedList.displayElement();
                break;
            case 10:
                console.log("Thank you");
                break;
            default:
                console.log("Please enter valid choice");
        }
    } while (choice != 10)


    // console.log(" Add element at the end in list");
    // let data=readline.questionInt();

    // objLinkedList.addElementAtLast(data);
    // objLinkedList.addElementAtLast(20);
    // objLinkedList.addElementAtLast(30);
    // objLinkedList.addElementAtLast(40);
    //  objLinkedList.displayElement();

    // console.log(" Add element at the first in list");
    // objLinkedList.addElementAtFirst(90);
    // objLinkedList.displayElement();
    // objLinkedList.sizeOfList();

    // console.log(" delete particular element in list 409");
    // objLinkedList.deleteParticularElement(40);
    // objLinkedList.displayElement();

    // console.log(" Add element at position in list");
    // objLinkedList.insertAtPosition(60,2);
    // objLinkedList.displayElement();

    // console.log(" delete first element in list");
    // objLinkedList.deleteAtFirst();

    // objLinkedList.displayElement();
    // console.log(" delete last element in list");
    // objLinkedList.deleteAtEnd();
    // objLinkedList.displayElement();

    // console.log(" delete element at position in list");
    // objLinkedList.deleteAtPosition(1);
    // objLinkedList.displayElement();

    // console.log(" searching element in list");
    // objLinkedList.searchElement(20);
}

module.exports = manageList()