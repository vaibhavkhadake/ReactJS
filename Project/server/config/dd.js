
const chatService=require('../services/chatService')

class UserChatController
{

    //storing messages history
chatAppDetailController(req,callback){

    try{
        let chatAppDetail={
            senderId:req.senderId,
            senderName:req.senderName,
            receiverId:req.receiverId,
            receiverName:req.receiverName,
            message:req.message
        }
        chatService.chatAppDetailService(chatAppDetail,(err,data)=>{
            if(err)
            {
                console.log("Error occured",err)
                callback (err);
            }
            else{
                console.log("Saved operation successfully")
                callback(null,data)
            }
        })

    }catch(e){
    console.log(e);
    }   

}

//return back chat data from database
getChatAppDataController(req,res){

    try{
        let response={}
    let error = req.validationErrors()
    if(error)
    {
        response.success=false;
        response.error=error;
        return res.status(400).send(response)
    }
    else
    {
       chatService.getChatAppDataService((err,data)=>{
            if(err)
            {
                response.success=false;
                response.message="Getting all message failed"
                response.error=error;
                return res.status(400).send(response)
            }
            else{
                response.success=true;
                response.message="All message successfully get"
                response.content=data
                return res.status(200).send(response)
            }
        })
    }
    
    }catch(e)
    {
        console.log(e)
    }
}
}

const userChatControllerObject=new UserChatController();
module.exports=userChatControllerObject;

const mongoose = require('mongoose');

let chatSchema = mongoose.Schema({
    senderId:{
        type:String,
        required:[true,"sender id is empty"]
    },
    
    senderName:{
        type:String,
        required:[true,"sender name is empty"]
    },

    receiverId:{
        type:String,
        required:[true,"receiver id is empty"]
    },

    receiverName:{
        type:String,
        required:[true,"Receiver name is empty"]
    },
    message:{
        type:String,
        required:[true,"message is empty"]}
    },
    {
    timestamps: true
    });

    //creating chatModel
    let chatModel= mongoose.model('chatDetail',chatSchema);

    class UserChatModel
    {
    chatAppDetailModel(chatAppDetail,callback)
        {
            try{
                let newChatDetail=new chatModel({
    
                    senderId:chatAppDetail.senderId,
                    senderName:chatAppDetail.senderName,
                    receiverId:chatAppDetail.receiverId,
                    receiverName:chatAppDetail.receiverName,
                    message:chatAppDetail.message
                })
                newChatDetail.save((err,data)=>
                {
                    if(err)
                    {
                        return callback()
                    }
                    else
                    {
                        console.log("\n\n\nmesaage saved successfully\n\n")
    
                        return callback(null,data)
                    }
                })
            }catch(e)
            {
                console.log(e)
            }
        }
    
        
    //fetching chatting data from database
getChatAppDataModel(callback){
        try{
    
        chatModel.find({},(err,chatData)=>{
        if(err)
        {
            return callback(err)
        }
        else if(chatData.length>0)
        {
            
            return callback(null,chatData)
        }
        else
        {
            return callback(null,"data is not present")
        }
        })  
        }catch(e)
        {
            console.log(e);
        }
        };
    
    }
    const userChatModelObject=new UserChatModel();
    module.exports=userChatModelObject;

let chatModel=require('../model/chatModel')

class UserChatService
{
//storing chat details to database
chatAppDetailService(chatAppDetail,callback){
    try{
 
     chatModel.chatAppDetailModel(chatAppDetail,(err,data)=>{
         if(err)
         {
             return callback(err)
         }
         else{
             return callback(null,data)
         }
 
     })
     }catch(e)
     {
         console.log(e)
     }
 }
 
 //service for getting chat details
getChatAppDataService(callback)
 {
     try{
     chatModel.getChatAppDataModel((err,data)=>{
         if(err){
             return callback(err)
         }
         else{
             return callback(null,data)
         }
 
     })
     }catch(e)
     {
         console.log(e)
     }
 }
}

const userChatServiceObject=new UserChatService();
module.exports=userChatServiceObject

//storing chat detail in db
// router.post('/chatAppDetail',chatCtrl.chatAppDetailController)

//get back message chat detail from db
router.get('/messageChatAppData',chatCtrl.getChatAppDataController)


chatApp.service('getUserDetailService', function ($http, $location) {
   
    this.getUserDetailServiceUser = function ($scope){
        $http(
            {
                method:'GET',
                url:'http://18.188.202.15:4000/userData'

            })
            .then(function (response)
                     {                    
            //in the form of id,first name last name.
                        $scope.getUserData=response.data.content;
                    //responce.data.content means we access content field in  responce object
                    //responce.data.message means we access message field in responce object
                        console.log("======>registered user list",response.data.content)
                    })
            .catch(function(error){

                    console.log("Nothing is present")
                });
    }

    /*get message service to get ('senderId,senderName,receiverId,receiverName,message)*/
    this.getUserMessageServiceUser=function($scope){
        $http(
            {
                method:'GET',
                url:'http://18.188.202.15:4000/messageChatAppData'

            }).then(function(response)
                     {         
            //In this response we will get ('senderId,senderName,receiverId,receiverName,message) and store that response in 'messageObj'
                        let messageObj=response.data.content;
            
                        let message=[]
                        let receiverId=localStorage.getItem('receiverId')
                        let receiverName=localStorage.getItem('receiverName')
                        
                        $scope.receiverClickId=receiverId
                        $scope.senderLoginId= localStorage.getItem('loginId') 
                        
                        let loginId=localStorage.getItem('loginId')
                        let loginName= localStorage.getItem('firstname') 
                        
                        for(let i=0;i<messageObj.length;i++)
                        {
                    
                            if(((messageObj[i].senderId===loginId && messageObj[i].receiverId===receiverId) 
                                ||(loginId===messageObj[i].receiverId && receiverId===messageObj[i].senderId)))

                            {
                                // console.log("MessageObject",messageObj[i])
                                message.push(messageObj[i])
                            }
                        }
                        
                        $scope.allMessage=message;
                        // console.log("All messages", $scope.allMessage)
                      
                        
                    })

              .catch(function(error){

                    console.log("Nothing is present",error)
                });
    }
    /*get message service************* */
});



    