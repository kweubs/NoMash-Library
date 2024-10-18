import express from 'express';

const app = express();
const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.send('Hello from Node.js!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});