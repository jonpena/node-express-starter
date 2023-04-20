import { Example } from '../interfaces/example.interface';
import exampleModel from '../models/example.model';

async function $getExamples() {
  const response = await exampleModel.find({});
  return response;
}

async function $getExample(_id: string) {
  const response = await exampleModel.findOne({ _id });
  return response;
}

async function $insertExample(tarea: Example) {
  const response = await exampleModel.create(tarea);
  return response;
}

async function $updateExample(_id: string, example: Example) {
  const response = await exampleModel.findOneAndUpdate({ _id }, example, {
    new: true,
  });
  return response;
}

async function $deleteExample(_id: string) {
  const response = await exampleModel.deleteOne({ _id });
  return response;
}

export {
  $getExample,
  $getExamples,
  $insertExample,
  $updateExample,
  $deleteExample,
};
