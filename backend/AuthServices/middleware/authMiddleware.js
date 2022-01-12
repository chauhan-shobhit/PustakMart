import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import user from '../models/user.js'

const protect =  asyncHandler (async (req,res,next) => {

    let token 
    token = req.headers.authorization.split(' ')[1]
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

        try 
    {
        

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await User.findById(decoded.id).select('-password')

        next()

    }
    catch(error) {
        console.error(error)
        res.status(401)
        throw new Error('Not Authorized')

    }


    }   
    if(!token) {
        res.status(401)
        throw new Error('not found')
    }

   
})


export {protect}
