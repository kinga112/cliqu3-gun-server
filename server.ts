import express, { Request, Response } from 'express';
import Gun from 'gun';

const app = express();

app.use(express.static(__dirname));

const server = app.listen(8765, () => {
  console.log('Server listening on http://localhost:8765');
});

Gun({ web: server });