import path from 'path';
import express from 'express';
import { CLIENT } from '../utils/dirPaths';

const help = (req: express.Request, res: express.Response): void => {
  res.sendFile(path.join(CLIENT, 'index.html'));
};

export default help;
