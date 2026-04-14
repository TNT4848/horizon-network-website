const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors()); // This allows your GitHub site to talk to this API
app.use(express.json());

// Connect to your Apex Hosting MySQL
const db = mysql.createConnection({
  host: 'YOUR_MYSQL_HOST',
  user: 'YOUR_USER',
  password: 'YOUR_PASSWORD',
  database: 'YOUR_DATABASE'
});

// Route to get posts
app.get('/posts', (req, res) => {
  db.query('SELECT * FROM forum_posts', (err, results) => {
    res.json(results);
  });
});

// Route to add a post
app.post('/posts', (req, res) => {
  const { username, content } = req.body;
  db.query('INSERT INTO forum_posts (username, content) VALUES (?, ?)', [username, content], (err) => {
    res.json({ success: true });
  });
});

app.listen(process.env.PORT || 3000);