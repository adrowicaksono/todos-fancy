const port = 3000
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/todoAPI')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connect with mongoose")
});

//require routes
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const taskRouter = require('./routes/task')

app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use('/task', taskRouter)

app.listen(3000, function(){
    console.log(`listen ${port}`)
})