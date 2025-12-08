import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { toNodeHandler } from 'better-auth/node'
import { auth } from './lib/auth.js';

dotenv.config();

const app = express();

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
);

app.all('/api/auth/*splat', toNodeHandler(auth));

app.use(express.json());

app.get('/health', (req, res) => {
    res.send('OK');
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
})