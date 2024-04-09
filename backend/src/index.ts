import cors from 'cors';
import express from 'express';

import { Workspace } from 'types';

const app = express();
const port = 5000;

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/workspaces', (_, res) => {
  const workspace: Workspace[] = [
    { name: 'backend', version: '1.0.0' },
    { name: 'frontend', version: '1.0.0' },
    { name: 'types', version: '1.0.0'}
  ]

  res.json({ data: workspace });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});