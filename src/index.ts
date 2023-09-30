import express from 'express';
import { setupConfig } from './config';

const app = express();
const port = 3000;

setupConfig(app);

app.listen(() => {
  console.log(`server listen on http://localhost:${port}`);
});
