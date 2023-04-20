import { Example } from '../interfaces/example.interface';
import { Schema, model } from 'mongoose';

const ExampleSchema = new Schema<Example>(
  {
    _id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { _id: false, timestamps: true, versionKey: false }
);

const ExampleModel = model('examples', ExampleSchema);

export default ExampleModel;
