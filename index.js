const mongoose = require("mongoose");
//////////////////////////////////////////////////////////////////
 
 
//  const pdf = require('pdf-parse');
//for the first time enable those two lines
// require("./geticd10");
// require("./setmedication");
//////////////////////////////////////////////////////////////////

 
const app = require("./src/app");
const config = require("./src/config/config");

let server;

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  console.log("Connected to MongoDB");
  server = app.listen(config.PORT, () => {
    console.log(`Listening to port ${config.PORT}`);
  });

 
});
// heelo
///////////////
// let dataBuffer = fs.readFileSync('./icd-10.pdf');
// pdf(dataBuffer).then((data)=>{
//     //  console.log(data.text);
//      fs.writeFile('./icd.txt',data.text,(err)=>{
//        if(err)console.log(err)
//         console.log("writting completed");
//      })
// })
//  const readInterface = readLine.createInterface({
//    input:fs.createReadStream('./icd.txt',),
//   //  output:process.stdout,
//    console:false
//  });
//  let oldline;
//  readInterface.on('line',(line)=>{
//    if(line){
//      fs.appendFileSync('./newfile.text',"line:"+line+"\n",(err)=>{
//       if(err)console.log(err)
//      })

//      const test =/^[a-zA-Z]\d{3,5}/
//      console.log(line.match(test))
//      oldline = line;
//    }
//  })
///////////////
const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.log(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  if (server) {
    server.close();
  }
});

/*
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point


*/
