import { Request, Response } from "express";
import { googleMapsApiKey } from "../sensitive";


export async function googleMaps(request: Request, response: Response) {

  const https = require('https');
  const googleMapsQuery = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Victoria+BC&mode=driving&language=en-EN&key=AIzaSyCnz6owGzTO8iZ04YlOzbG1XBN1BH7qIoo';

 // const distMatrix;
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