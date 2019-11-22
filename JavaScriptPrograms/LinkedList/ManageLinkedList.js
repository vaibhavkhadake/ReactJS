
let linkedList=require('./LinkedList')
let objLinkedList=new linkedList.LinkedList()

manageList=()=>
{
    console.log(" Add element at the end in list");
    
    objLinkedList.addElementAtLast(10);
    objLinkedList.addElementAtLast(20);
    objLinkedList.addElementAtLast(30);
    objLinkedList.addElementAtLast(40);
    objLinkedList.displayElement();
   
    console.log(" Add element at the first in list");
    objLinkedList.addElementAtFirst(90);
    objLinkedList.displayElement();
    objLinkedList.sizeOfList();
    
    console.log(" delete particular element in list 40");
    objLinkedList.deleteParticularElement(40);
    objLinkedList.displayElement();

    console.log(" Add element at position in list");
    objLinkedList.insertAtPosition(60,2);
    objLinkedList.displayElement();

    console.log(" delete first element in list");
    objLinkedList.deleteAtFirst();

    objLinkedList.displayElement();
    console.log(" delete last element in list");
    objLinkedList.deleteAtEnd();
    objLinkedList.displayElement();
    
    console.log(" delete element at position in list");
    objLinkedList.deleteAtPosition(1);
    objLinkedList.displayElement();
   
    console.log(" searching element in list");
    objLinkedList.searchElement(20);
}

module.exports=manageList()