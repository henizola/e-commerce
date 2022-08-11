const Joi = require("joi");
const fs = require("fs");
const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");

const deleteFile=(path)=>{
  try {
    if (fs.existsSync(path)) {
       console.log('file:',path,'found');
    }
    fs.unlinkSync(path,function(err){
      if(err) return console.log(err);
      console.log('file deleted successfully');
 });
    //file removed
  } catch(err) {
    console.error(err)
  }
}

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ["params", "query", "body"]);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" }, abortEarly: false })
    .validate(object);

  if (error) {
  //   if(req.files){
  //     console.log('inside validation');
  //     req.files.map(file=> {
  //       deleteFile(file['path']);
  //       return file['filename'];
  //     });
  // }
   
    let structured = {};
    const errorMessage = error.details.map((details) => {
      details.path.splice(0, 1);
      var object = {};
       
      details.path.reduce(function (o, s) {
        if (details.path.length - 1 === details.path.indexOf(s))
          return (o[s] = details.message.toString().replace(/\"/g, ""));
        return (o[s] = {});
      }, object);
      
      let key = details.path[0];
      structured[key] = structured[key]
        ? { ...structured[key], ...object[key] }
        : object[key];
     
      return {
        // structured,
        //  ... details.context,path:details.path,message:details.message.toString().replace(/\"/g,''),
      };
    });

    console.log(structured);
    return next(
      new ApiError(
        httpStatus.BAD_REQUEST,
        JSON.stringify(structured),
        "validation"
      )
    );
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
