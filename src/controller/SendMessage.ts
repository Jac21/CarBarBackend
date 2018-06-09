import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "../entity/User";
import http = require('http');
import { accountSid, authToken } from "../sensitive";


export async function sendMessage(request: Request, response: Response) {

	const client = require('twilio')(accountSid, authToken);

	client.messages
  	.create({
     body: 'Hi Ritika, this is Natasha from CarBar', // this is message body for texting
     from: '+15037147388', //This is CarBar's Twilio number
     //Add media to a message 
     //mediaUrl: 'https://www.alivenetwork.com/images/extrabandpics/thecarbar4.jpg',
     to: '+17348349568' //Customer's number
   })
  .then(message => console.log(message.sid))
  .done();
    response.send('Message Sent');
}