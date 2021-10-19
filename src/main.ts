import express, { Application, Request, Response, NextFunction } from 'express';
// rest of the code remains same
const app: Application   = express();
const PORT = 5000;
app.get('/', (request: Request, response: Response, next: NextFunction) => response.send('Express with TypeScript Server is not runnning fine and fine'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});