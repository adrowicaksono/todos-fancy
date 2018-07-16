const Task = require('../models/task')

const getHastag = function(hashtag){
    let strings = hashtag.split("#")
    let tags = strings.reduce(function(a, b){
        if(b){
            let tag = b.trim()
            if(tag){
                a.push(tag)
            }
        }
        return a
    }, [])
    return tags
}

const get = function(req, res){
    Task
    .find()
    .populate("userId", ["name", "email"])
    .then(function(task){
        res
            .status(200)
            .json({task})
    })
    .catch(function(err){
        res
            .status(400)
            .json({
                msg: err.message
            })
    })
}

const add = function(req, res){
    let hashtag = getHastag(req.body.tag)

    Task
    .create({
        task:req.body.task,
        tag: hashtag,
        status:"undoing",
        userId: req.body.userId,
    })
    .then(function(task){
        res
            .status(200)
            .json({
                msg : "task has been created",
                task : task
            })
    })
    .catch(function(err){
        res
            .status(400)
            .json({
                msg : err.message,
            })
    })
}

const edit = function(req, res){
    console.log(req.query.id)
    Task
    .findById(req.query.id)
    .then(function(task){
        let tag = getHastag(req.body.tag)
        // console.log(task)
        // let newTag = [...task.tag, ...tag]
        // console.log(newTag)
        Task
        .findByIdAndUpdate(req.query.id,{
            task:req.body.task,
            tag: tag, 
        })
        .then(function(task){
            res
                .status(200)
                .json({
                    msg : "update succesfully",
                    task : task
                })
        })
        .catch(function(err){
            res
                .status(400)
                .json({
                    msg:err.message
                })
        })

    })
    .catch(function(err){
        res
            .status(400)
            .json({
                msg: err. message
            })
    })
}

const remove = function(req, res){
    Task
    .findByIdAndRemove(req.query.id)
    .then(function(task){
        res
            .status(200)
            .json({
                msg: "remove  task successfully",
                task : task
            })
    })
    .catch(function(err){
        res
            .status(400)
            .json({
                msg: err.message
            })
    })
}

const taskStatus = function(req, res){
    
}


module.exports = {
    get,
    add,
    remove,
    edit,
}