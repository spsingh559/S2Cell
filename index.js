'use strict';
 
var S2 = require('s2-geometry').S2;


var level = 14;
 
// 24.690437, 46.639942
// 24.690125, 46.638805
// 24.689774, 46.641487
// 24.686424, 46.630702

//Home 24.691023856659704 46.63915882510503

// var lat = 24.690437;
// var lng = 46.639942;

// School 24.691023856659704 46.63915882510503

// var lat = 24.690125;
// var lng = 46.638805;



//Mosque 24.691023856659704 46.63915882510503

// var lat = 24.689774;
// var lng = 46.641487;

//embassy  24.6875647573031 46.62950888269813

var lat = 24.686424;
var lng = 46.630702;

 
//Riad
// var lat=24.7684057
// var lng=46.7933009


 
//
// Convert from Lat / Lng
//
var key = S2.latLngToKey(lat, lng, level);
// console.log('key', key)
var id = S2.keyToId(key);
// console.log('id', id)

var latlng = S2.idToLatLng(id);
console.log('input lat, lng', lat,lng)
console.log('cell coordinate', latlng.lat, latlng.lng);