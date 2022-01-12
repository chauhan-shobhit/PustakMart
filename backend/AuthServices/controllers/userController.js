import asyncHandler from 'express-async-handler'
import User from '../models/user.js'
import generateToken from '../utils/generateToken.js'


const authUser   = asyncHandler(async(req,res) =>    {

    const { email, password } = req.body

        const user = await User.findOne({email})
        console.log(user)
        console.log(email)
        console.log(password)
        


        if (user && (user.password == password)) {
            res.json({
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
              token: generateToken(user._id),
            })
          } else {
            console.log(user.matchPassword(password))
            res.status(401)
            throw new Error('Invalid email or password')
          }

})


const getUserProfile = asyncHandler(async(req, res) => {

    const user = await User.findById(req.user._id)

    if (user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin

        })

    }

})


const registerUser   = asyncHandler(async(req,res) =>    {

    const { name, email, password } = req.body

        const userCheck = await User.findOne({email})

        if(userCheck){

           res.status(400)
           res.json('Bad Request')
        }
        const user = await User.create({
            name,
            email,
            password
        })

        if(user){

            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)

            })
        }

})

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
  
    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if (req.body.password) {
        user.password = req.body.password
      }
  
      const updatedUser = await user.save()
  
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })


  

export {
    authUser, getUserProfile, registerUser, updateUserProfile
}