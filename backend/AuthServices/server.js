

import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import userRoutes from './routes/userRoutes.js'

dotenv.config({ path: process.cwd() + '/backend/AuthServices/.env'})

//console.log(process.env.MONGO_URI)

connectDB()

const app = express()
const PORT = process.env.PORT || 5000


app.use(express.json())

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)


app.get(
    '/',
    (req,res)=>{
        res.send("API is triggered")
    }
)

  



app.listen(PORT, console.log(`server running on port ${PORT}`))

