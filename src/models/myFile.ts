import mongoose, { Schema } from 'mongoose';
import { MyFileDocument, MyFileSchema, MyFileModel } from '../interfaces/mongoose.gen';

const schema: MyFileSchema = new Schema({
  file: {
    type: Schema.Types.Buffer,
    default: null,
  }
});

export const myFile: MyFileModel = mongoose.model<MyFileDocument, MyFileModel>('MyFile', schema);

export default myFile;