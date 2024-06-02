import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String,
    repeatpass: String,
    termscheck:Boolean,
  });

const formSchemaModel = mongoose.model('FormSchemaModel', formSchema);

export default formSchemaModel;
