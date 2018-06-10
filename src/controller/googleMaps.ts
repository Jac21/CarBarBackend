import { Request, Response } from "express";
import { googleMapsApiKey } from "../sensitive";


export async function googleMaps(request: Request, response: Response) {

  const https = require('https');
  const googleMapsApiEndpoint = 'https://maps.googleapis.com/maps/api/distancematrix/json?';
  const destinations = '&destinations=11800+Domain+Blvd+Austin+TX';
  const origins = '&origins=11011+Domain+Drive+Austin+TX|1800+Plateau+Vista+Blvd+Round+Rock+TX';
  const mode = '&mode=driving';
  const language = '&language=en-EN';
  const key = '&key=' + googleMapsApiKey;
  const units = 'units=imperial';

  
  const googleMapsQuery = googleMapsApiEndpoint + units + origins + destinations + mode + language + key;

  https.get(googleMapsQuery, (res) => {
  console.log('statusCode:', res.statusCode);

  var body = '';

  res.on('data', function(chunk) {
    body +=chunk;
  });

  res.on('end', function(){
    var mapsResponse = JSON.parse(body);
      console.log("Got a response: ", mapsResponse);
      response.send(mapsResponse);
    });

}).on('error', (e) => {
  console.error(e);
});
}