import { Request, Response } from "express";
import http = require('http');
import { googleMapsApiKey } from "../sensitive";


export async function googleMaps(request: Request, response: Response) {

  var googleMapsClient = require('@google/maps').createClient({
  key: googleMapsApiKey
  });
 
  var test = googleMapsClient.geocode({
    address: '1600 Amphitheatre Parkway, Mountain View, CA'
  }, function(err, res) {
  if (!err) {
     console.log(res.json.results);
  }
});
   response.send(test);
}