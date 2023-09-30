import { Express, Request, Response, NextFunction, json } from 'express';

export function setupConfig(app: Express) {
  app.use(cors);
  app.use(bodyParser());
  app.use(contentType);
}

function cors(req: Request, res: Response, next: NextFunction) {
  res.set('access-control-allow-origin', '*');
  res.set('access-control-allow-methods', 'GET, POST PATCH, DELETE');
  res.set('access-control-allow-headers', '*');
  next();
}

function contentType(req: Request, res: Response, next: NextFunction) {
  res.type('json');
  next();
}

function bodyParser() {
  return json();
}
