const express = require('express')
const router = express.Router()
const ControllerTask = require('../controllers/task')

router
    .get('/', ControllerTask.get)
    .post('/', ControllerTask.add)
    .delete('/', ControllerTask.remove)
    .put('/', ControllerTask.edit)




module.exports = router