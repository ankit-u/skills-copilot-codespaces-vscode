// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Read comments from file
app.get('/api/comments', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Server Error');
    } else {
      res.status(200).send(JSON.parse(data));
    }
  });
});

// Write comments to file
app.post('/api/comments', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Server Error');
    } else {
      const comments = JSON.parse(data);
      const newComment = req.body;
      comments.push(newComment);
      fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
        if (err) {
          res.status(500).send('Server Error');
        } else {
          res.status(200).send('Success');
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// End of Path: comments.js