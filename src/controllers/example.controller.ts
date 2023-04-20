import { RequestHandler } from 'express';
import { handleHttp } from '../utils/error.handler';
import {
  $getExample,
  $getExamples,
  $insertExample,
  $updateExample,
  $deleteExample,
} from '../services/example.service';

const getExample: RequestHandler = async ({ params }, res) => {
  try {
    const { id } = params;
    const response = await $getExample(id);
    const data = response ? response : 'NOT_FOUND_EXAMPLE';
    res.send(data);
  } catch (error) {
    handleHttp('ERROR_GETTING_EXAMPLE', res, error);
  }
};

const getExamples: RequestHandler = async (_, res) => {
  try {
    console.log('carlos');
    const response = await $getExamples();
    res.send(response);
  } catch (error) {
    handleHttp('ERROR_GETTING_EXAMPLES', res, error);
  }
};

const createExample: RequestHandler = async ({ body }, res) => {
  try {
    const responseItem = await $insertExample(body);
    res.send(responseItem);
    console.log('creating a new Example');
  } catch (error) {
    handleHttp('ERROR_CREATING_EXAMPLE', res, error);
  }
};

const updateExample: RequestHandler = async ({ params, body }, res) => {
  try {
    const response = await $updateExample(params.id, body);
    res.send(response);
    console.log('updating a example');
  } catch (error) {
    handleHttp('ERROR_UPDATING_EXAMPLE', res, error);
  }
};

const deleteExample: RequestHandler = async ({ params }, res) => {
  try {
    const responseItem = await $deleteExample(params.id);
    res.send(responseItem);
    console.log('deleting a Example');
  } catch (error) {
    handleHttp('ERROR_DELETING_EXAMPLE', res, error);
  }
};

export { getExample, getExamples, createExample, updateExample, deleteExample };
