
let nodeImport=require('./Node')

class LinkedList
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }

    addElement(data)
    {
        let node=new nodeImport.Node(data);
        let currentNode;
        //If node is empty
        if(this.head==null)
        {
            this.head=node;
        }
        else
        {
            currentNode=this.head;
            // iterate end of the list
            while(currentNode.next)
            {
                currentNode=currentNode.next;
            }
            //Adding a new node
            currentNode.next=node
           
        }
        this.size++;
    }

    //delete particular element
    
    deleteElement(data)
    {
        let currentElement=this.head;
        let previous=null;
        while(currentElement!=null)
        {
            if(currentElement.data === data)
            {
                if(previous==null)
                {
                    this.head=currentElement.next
                }   
                else
                {
                    previous.next=currentElement.next
                }
            this.size--;
            return currentElement.data
                   
            }
        previous=currentElement;
        currentElement=currentElement.next;
        }
        //element not found then return 
    return -1;
       
    }

    displayElement()
    {
        let currentElement=this.head;
        let tempString=" ";
        while(currentElement)
        {
            tempString = tempString + currentElement.data + " ";
            currentElement = currentElement.next;
        }
        console.log(tempString);
    }

}

module.exports={LinkedList}