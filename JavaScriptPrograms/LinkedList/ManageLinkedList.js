
let readline=require('readline-sync')
let linkedList=require('./LinkedList')
let objLinkedList=new linkedList.LinkedList()

function manageList()
{
    objLinkedList.addElementAtLast(10);
    objLinkedList.addElementAtLast(20);
    objLinkedList.addElementAtLast(30);
    objLinkedList.addElementAtLast(40);
   
    objLinkedList.addElementAtFirst(90);
    objLinkedList.displayElement();

    objLinkedList.deleteParticularElement(40);

    objLinkedList.insertAtPosition(60,2);
    objLinkedList.displayElement();

    objLinkedList.deleteAtFirst();

    objLinkedList.displayElement();

    objLinkedList.deleteAtEnd();
    objLinkedList.displayElement();

    objLinkedList.deleteAtPosition(1);
    objLinkedList.displayElement();

    objLinkedList.searchElement(20);

    objLinkedList.searchElement(99);

}

module.exports=manageList()