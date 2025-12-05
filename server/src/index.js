import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.get('/health', (req, res) => {
    res.send('OK');
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
})