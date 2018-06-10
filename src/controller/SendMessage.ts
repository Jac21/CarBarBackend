import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "../entity/User";
import http = require('http');
import { accountSid, authToken } from "../sensitive";


export async function sendMessage(request: Request, response: Response) {

	const client = require('twilio')(accountSid, authToken);

	    // get a user repository to perform operations with post
    const userRepository = getManager().getRepository(User);

    // load a user by a given post id
    const users = await userRepository.find();

try{

	users.forEach(function(user){

   	client.messages
  	.create({
     body: 'Hi Ritika, this is Natasha from CarBar', // this is message body for texting
     from: '+15037147388', //This is CarBar's Twilio number
     //Add media to a message 
     //mediaUrl: 'https://www.alivenetwork.com/images/extrabandpics/thecarbar4.jpg',
     to: user.PHONE_NUMBER //Customer's number
   })
  .then(message => console.log(message.sid))
  .done();
       console.log(user.PHONE_NUMBER);
   })

    response.send('Messages Sent');

}
catch(ex)
{
	
}

}