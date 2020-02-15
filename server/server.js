const express = require('express');
const Twitter = require('twit');
const app = express();

app.listen(3000, () => console.log('Server running'));

const api_client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
})