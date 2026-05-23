import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { apiRouter } from './routes';

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter(io));

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'api' }));

const port = Number(process.env.PORT || 4000);
server.listen(port, () => console.log(`API running on ${port}`));
