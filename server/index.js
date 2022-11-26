const express= require('express')
const dotenv= require('dotenv')
const cors =require('cors')
const path=require('path')

const db =require('./models')
const departmentRoutes=require('./routes/departmentRoutes')

const app=express()
app.use(cors({origin:"http://localhost:3000"}))

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({limit:"10mb",parameterLimit:2000 , extended:true}))

app.use('/department',departmentRoutes)

db.sequelize.sync().then(()=>{
    app.listen(process.env.PORT  || 6000,()=>{
        console.log(`Up and running on PORT ${process.env.PORT || 5000}`)})
})





