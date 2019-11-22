
let nodeImport = require('./Node')

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty()
    {
       return this.size==0;
    }

    sizeOfList()
    {
        console.log(" size of linked list : ",this.size);
    }

    //Add element at first in list

    addElementAtFirst(data) {
        let node = new nodeImport.Node(data, this.head);
        this.head = node;
        this.size++
    }

    //Add element at last in list
    addElementAtLast(data) {
        let node = new nodeImport.Node(data);
        let currentNode;
        //If node is empty
        if (this.head == null) {
            this.head = node;
        }
        else {
            currentNode = this.head;
            // iterate end of the list
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            //Adding a new node
            currentNode.next = node
            // console.log("element ", currentNode);
        }
        this.size++;
    }
   

    //Add element at position in list
    insertAtPosition(data, index) {
        if (index > 0 && index > this.size) {
            console.log("Index is out of range");
            return
        }
        if (index === 0) {
            this.addElementAtFirst(data)
        }
        let node = new nodeImport.Node(data);
        let currentElement, previousElement;

        currentElement = this.head;
        let count = 0;

        while (count < index) {
            previousElement = currentElement;
            count++;
            currentElement = currentElement.next;
        }
        node.next = currentElement;
        previousElement.next = node;
        this.size++
    }

    // delete first element in list
    deleteAtFirst() {
        let currentElement = this.head;
        this.head = currentElement.next;
        this.size--;
    }

    //delete end element in list

     deleteAtEnd() {
        let  currentNode = this.head;
        if(this.size===0)
        {
         console.log(" Stack is empty");
        }
        if(this.size==1)
        {
            this.head=null;
            this.size=0;
            return currentNode
        }
        let previousNode=currentNode;
        while(currentNode.next!==null)
        {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        previousNode.next=null
        this.size--;
    }

     //delete element at index position

     deleteAtPosition(index) {
        if (index > 0 && index > this.size) {
            console.log(" Index is out of range");
            return -1
        }
        else {
            let currentElement, previousElement;
            let count = 0;
            currentElement=this.head
            previousElement = currentElement;

            if (index === 0) {
                this.head = currentElement.next;
            }
            else {
                while (count < index) {
                    count++;
                    previousElement = currentElement;
                    currentElement = currentElement.next;
                }
                previousElement.next = currentElement.next
            }
            this.size--
        }

    }

    //delete particular element

    deleteParticularElement(data) {
        let currentElement = this.head;
        let previous = null;

        while (currentElement != null) {
            if (currentElement.data === data) {
                if (previous == null) {
                    this.head = currentElement.next
                }
                else {
                    previous.next = currentElement.next
                }
                this.size--;
                // return currentElement.data

            }
            previous = currentElement;
            currentElement = currentElement.next;
            // console.log("currentElement ", currentElement);
        }
        //element not found then return 
        return -1;
    }

    //Search element in list

    searchElement(data)
    {
        let currentElement=this.head;
        while(currentElement)
        {
            if(currentElement.data === data)
            {
                console.log(" element found ", currentElement.data);
                return currentElement
            }
            currentElement = currentElement.next;
        } 
        console.log(" element not found ");
    }

    //Display elements in list 

    displayElement() {
        let currentElement = this.head;
        let tempString = " ";
        while (currentElement) {
            tempString = tempString + currentElement.data + " ";
            currentElement = currentElement.next;
        }
        console.log(tempString);
    }
}


module.exports = { LinkedList }