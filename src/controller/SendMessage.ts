import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "../entity/User";
import http = require('http');
import { accountSid, authToken } from "../sensitive";


export async function sendMessage(request: Request, response: Response) {

	const client = require('twilio')(accountSid, authToken);

    const userRepository = getManager().getRepository(User);
    const users = await userRepository.find();

	users.forEach(function(user){

   	client.messages
  	.create({
     body: 'Welcome to CarBar!', // this is message body for texting
     from: '+15037147388', //This is CarBar's Twilio number
     //Add media to a message 
     mediaUrl: 'https://raw.githubusercontent.com/Jac21/carbar-frontend/master/public/img/V1.png',
     to: user.PHONE_NUMBER //Customer's number
   })
  .then(message => console.log(message.sid))
  .catch(err => console.error(err));
       console.log(user.PHONE_NUMBER);
   })

    response.send('Messages Sent');

}