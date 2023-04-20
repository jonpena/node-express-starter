import path from 'path';
import { readdirSync } from 'fs';
import { Router } from 'express';

const router = Router();

readdirSync(__dirname).filter((filename) => {
  const file = path.parse(filename).name;
  if (file !== 'index.routes') {
    import(`./${file}`).then((moduleRouter) => {
      router.use(`/${file}`, moduleRouter.router);
      console.log(`Route ${file} ready`);
    });
  }
});

export { router };
