const h3 = require("h3-js");
//460 m
let resolution=8

//Home 24.68991509631109, 46.64155512447168
// var lat = 24.690437;
// var lng = 46.639942;

// School 24.68991509631109, 46.64155512447168

// var lat = 24.690125;
// var lng = 46.638805;



//Mosque 24.68991509631109, 46.64155512447168

// var lat = 24.689774;
// var lng = 46.641487;

//embassy 24.685805799523692, 46.63377516735151

var lat = 24.686424;
var lng = 46.630702;

 
//Riad
// var lat=24.7684057
// var lng=46.7933009


const h3Index = h3.geoToH3(lat,lng, resolution);
const hexCenterCoordinates = h3.h3ToGeo(h3Index);
console.log('hexCenterCoordinates', hexCenterCoordinates);