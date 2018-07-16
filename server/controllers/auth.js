const User = require('../models/user')
var jwt = require('jsonwebtoken');

const login = function(req,res){
    let email = req.body.email
    let password = req.body.password

    User
    .findOne({
        email : email
    })
    .then(function(user){
        if(user){
            let hash = user.password
            user
            .comparePassword(password, function(err, isMatch){  
                if(isMatch){
                    var token = jwt.sign({ id:user.id, name:user.name, email:user.email }, 'hacktiv8');
                    console.log("dari server token :", token )
                    res
                        .status(200)
                        .json({
                            msg : "login successfully",
                            token : token,
                        })
                    }else{
                        res
                            .status(401)
                            .json({
                                msg : "wrong password"
                            })
                    }

            })
        }else{
            res
                .status(400)
                .json("email unregister")
        }
    })
    .catch(function(err){
        res
        .status(401)
        .json({
            msg : err.message
        })
    })
    console.log(email, password)
}





module.exports = {
    login
}