var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('<html><body><h1>Home Page</h1></body></html>');
});

app.get('/about', (req, res) => {
    res.send('<html><body><h1>About Us</h1><p>This is the about page.</p></body></html>');
});

app.get('/contact', (req, res) => {
    res.send('<html><body><h1>Contact Us</h1><p>This is the contact page.</p></body></html>');
});

// Catch-all for 404
app.use((req, res) => {
    res.status(404).send('<html><body><h1>404 Not Found</h1></body></html>');
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
