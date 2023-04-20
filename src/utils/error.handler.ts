import { Response } from 'express';

function handleHttp(customError: string, res: Response, error?: unknown) {
  console.log(error);
  res.status(400);
  res.send({ customError, error });
}

export { handleHttp };
