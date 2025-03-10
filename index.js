const express= require('express')
const mongoose= require('mongoose')
const cors= require('cors')
// const TodoModel = require('./Models/TodoModel')

const app = express()   
const routes= require('./routes/TodoRoute')  

     
mongoose.connect('mongodb://127.0.0.1:27017/test')
        .then(()=> console.log("Connected to MongoDB"))
        .catch((err)=> console.log(err))

app.use(cors())
app.use(express.json())
app.use(routes)

// app.post('/add' , (req,res )=>{
//     const task=req.body.task;
//     TodoModel.create({
//         task:task
//     }).then(result => res.json(result))
//     .catch(err => res.json(err))
// })
// app.get('/get' , (req,res)=>{
//     TodoModel.find()
//     .then(result => res.json(result))
//     .catch(err => res.json(err))

// })

// app.put('/update/:id' ,(req,res)=>{
//     const {id} = req.params;
//     TodoModel.findByIdAndUpdate({_id:id} ,{done:true})
//     .then(result => res.json(result))
//     .catch(err =>  res.json(err))
// })   

app.listen(3001, ()=>{
    console.log("server is listening")
})