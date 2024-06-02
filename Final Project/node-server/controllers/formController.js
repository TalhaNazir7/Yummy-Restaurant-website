import formSchemaModel from "../model/schemaModel.js";


export const getForm = async (req, res) => {
  try {
    let query={}
    const formData = await formSchemaModel.find(query);
    res.status(200).json(formData);

  } catch (error) {
    console.log("i M GET.");
    res.status(404).json({ message: error.message });
  }
};

export const postForm = async (req, res) => {
  const {name,email,password,repeatPass,termscheck} = req.body;

  const newData = new formSchemaModel({
    name: name,
    email: email,
    password: password,
    repeatPass: repeatPass,
    termscheck: termscheck,
  });

  try {
    await newData.save();
    res.json(newData);
    
  } catch (error) {
    console.log(error.message);
  }
};
