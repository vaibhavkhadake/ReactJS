changePassword(body, id, callback) {
    console.log("request in change password model method and id is:=>", id);
    console.log("request in change password model method and body.password is :>",body.password);
    
    var qpassword = utility.encryptPass(body.password);
    console.log("password to be hashed"+body.password+"\npassword after hashing", qpassword);
    users.findByIdAndUpdate(id, { password:qpassword }, (err, data) => {
        if (err) {
            console.log("error finding id in changepassword method in model");
            callback(err);
        } else {
            console.log("password updated succesfully", data);
            callback(null, data);
        }
    });
}