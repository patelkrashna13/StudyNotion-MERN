const express = require('express')
const app=express()

const userRoutes = require('./routes/User')
const profileRoutes = require('./routes/Profile')
const paymentRoutes = require('./routes/Payments')
const courseRoutes = require('./routes/Course')

const database = require('./config/database')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const {cloudinaryConnect} = require('./config/cloudinary')
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')

dotenv.config();//fetching all the data of dotenv in index.js
const PORT = process.env.PORT

database.connect()

//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(
    cors(
        {
            origin:'http://localhost:5173',//use to interact with the frontend's port no.
            credentials:true,
        }
    )
)

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:'/tmp',
    })
)

//cloudinary connection
cloudinaryConnect()

//routes
app.use('/api/v1/auth',userRoutes)
app.use('/api/v1/profile',profileRoutes)
app.use('/api/v1/course',courseRoutes)

// app.use('/api/v1/payment',paymentRoutes)

// app.use('/api/v1/payment',paymentRoutes)
//default route

app.get('/',(req,res)=>{
    res.send(`<h1>Hello World!</h1>`)  
})

app.listen(PORT,()=>{
      console.log(`Server is running at port no ${PORT}`)
})

