import { Router } from 'express';
import { Server } from 'socket.io';

export const apiRouter = (io: Server): Router => {
  const router = Router();
  router.get('/health', (_req, res) => res.json({ status: 'ok' }));
  router.post('/webhooks/whatsapp', (req, res) => {
    io.emit('whatsapp:message', req.body);
    res.status(202).json({ accepted: true });
  });
  router.post('/ai/chat', async (req, res) => {
    const prompt = String(req.body?.prompt || '');
    res.json({ response: `AI response stub for: ${prompt}` });
  });
  return router;
};
