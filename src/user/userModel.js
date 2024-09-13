import mongoose, { mongo } from "mongoose";

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})

export const User=mongoose.model('user',userSchema)

const RefreshTokenSchema = mongoose.Schema(
    {
        refresh_token: {
            type: String,
            required: true
        }
    }
)

export const RefreshToken = mongoose.model('RefreshToken', RefreshTokenSchema)