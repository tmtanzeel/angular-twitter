const express = require('express');
const Twitter = require('twit');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.listen(3000, () => console.log('Server running'));
app.use(bodyParser.json());
app.use(cors());

const api_client = new Twitter({
    consumer_key: 'YOUR_KEY',
    consumer_secret: 'YOUR_KEY',
    access_token: 'YOUR_KEY',
    access_token_secret: 'YOUR_KEY'
})

app.get('/home_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 10 };
   
    api_client
      .get('statuses/home_timeline', params)
      .then(timeline => {
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
});
   
