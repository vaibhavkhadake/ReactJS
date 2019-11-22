
let util=require('./LinkedList');
let objDeque=new util.LinkedList();

deque=()=>
{
  console.log("Insert at front End");
  objDeque.addElementAtFirst(10);
  objDeque.addElementAtFirst(20);
  objDeque.displayElement()

  console.log("Insert at rear End");
  objDeque.addElementAtLast(50);
  objDeque.addElementAtLast(60);
  objDeque.displayElement()

  console.log("Delete at front End");
  objDeque.deleteAtFirst();
  objDeque.displayElement()

  console.log("Delete at Rear End");
  objDeque.deleteAtEnd();
  objDeque.displayElement()

  objDeque.sizeOfList();
  
}

module.export=deque()