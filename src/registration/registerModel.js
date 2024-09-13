import express from 'express'
import mongoose from 'mongoose'

const registerSchema= mongoose.Schema({
    first_name:{
         type:String,
         required:true
    },
    last_name:{
        type:String,
        required:true
    },
    phone_no:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    user_name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

export const Register = mongoose.model('register',registerSchema)