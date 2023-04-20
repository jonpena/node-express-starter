import { Router } from 'express';

import {
  getExample,
  getExamples,
  createExample,
  updateExample,
  deleteExample,
} from '../controllers/example.controller';

const router = Router();

router.get('/', getExamples);

router.get('/:id', getExample);

router.post('/', createExample);

router.put('/:id', updateExample);

router.delete('/:id', deleteExample);

export { router };
