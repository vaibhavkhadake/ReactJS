
let readline=require('readline-sync')
let linkedList=require('./LinkedList')
let objLinkedList=new linkedList.LinkedList()

function manageList()
{
    objLinkedList.addElement(10);
    objLinkedList.addElement(20);
    objLinkedList.addElement(30);
    objLinkedList.addElement(40);
    objLinkedList.addElement(50);

    objLinkedList.displayElement();

    objLinkedList.deleteElement(40);
    objLinkedList.deleteElement(70);

    objLinkedList.displayElement();

}
module.exports=manageList()