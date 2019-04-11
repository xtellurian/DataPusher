'use strict';
require('dotenv').config()

const fs = require('fs');
const request = require('request');

let ENDPOINT = process.env.ENDPOINT
let AUTH_HEADER = process.env.AUTH_HEADER

let rawdata = fs.readFileSync('data/data.json');
let dataArray = JSON.parse(rawdata);

function sendData(data) {
    console.log("sending...")
    console.log(data);

    request.post({
        headers: { 'content-type': 'application/json', "Authorization": AUTH_HEADER },
        url: ENDPOINT,
        body: data
    }, function (error, response, body) {
        console.log("response body:")
        console.log(body)
    });
}

function sendNext() {
    if (index >= dataArray.length) {
        index = 0;
    }
    let data = dataArray[index];
    sendData(data);
}

var index = 0
setInterval(function(){ sendNext() },1000)