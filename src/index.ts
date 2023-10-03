import express from 'express';
import { setupConfig } from './config';
import { router } from './routes';

const app = express();
const port = process.env.PORT || 3000;

setupConfig(app);
app.use(router);

app.listen(port, () => {
  console.log(`server listen on port:${port}`);
});
