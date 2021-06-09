import mongoose, { Schema } from 'mongoose';
import { MyProjectDocument, MyProjectSchema, MyProjectModel } from '../interfaces/mongoose.gen';
import myFile from './myFile';

const schema: MyProjectSchema = new Schema({
  imageFile: [myFile.schema],
  pdfFile: [myFile.schema],
});

export const MyProject: MyProjectModel = mongoose.model<MyProjectDocument, MyProjectModel>('MyProject', schema);

export default MyProject;