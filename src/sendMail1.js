import express from 'express'

import pkg from 'nodemailer';
const {nodemailer} = pkg;

const sendMail = () => {
    const sender=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'reacttest143@gmail.com',
            pass:'wbmz tbxs accc oyxp'
        }
    })
    const composemail={
        from:'reacttest143@gmail.com',
        to:'mahalakshmimca142@gmail.com',
        subject:'send mail using node JS',
        text:'hi'
    }
    sender.sendMail(composemail,function(error,info){
        if(error)
        {
            console.log(error);
            
        }
        else{
            console.log("Mail sent successfully"+info.response);
            
        }
    })
    
  return (
   
    console.log("Mail sent successfully"+info.response)


   
  )
}

export default sendMail



