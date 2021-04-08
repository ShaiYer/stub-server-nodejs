const http = require("http");
const fs = require('fs');


const host = 'localhost';
const port = 8001;

const defaultJsonFileName = 'default.json';

let jsonData = require('./example-api/default.json');


const requestListener = function (req, res) {

    let responseData = getFilePathResponse(req.url);

    // Allow CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);

    res.end(JSON.stringify(responseData));

};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


/**
*
* Get File Response By Path
*
***/


const getFilePathResponse = function(url) {
  let responseData = jsonData;
  let pathUrlTrimmed = url.replace(/^\/|\/$/g, '');
  pathUrlTrimmed = pathUrlTrimmed.replace('api/v1/', '');

  let urlPathArray = pathUrlTrimmed.split('/');

  console.log(pathUrlTrimmed, urlPathArray);

  let jsonFileName = defaultJsonFileName;
  let folder = '';


  let filePath = '.';
  for (let i of urlPathArray) {
    filePath += '/'+ i;
  }

  // fetch file by filePath
  try {

    let filePathJson = (filePath.indexOf('.json') > 0) ? filePath : filePath + '.json';
    let filePathDefault = filePath + '/default.json';

    if (fs.existsSync(filePathJson)) {
      responseData = require(filePathJson);
    } else if (fs.existsSync(filePathDefault)) {
      responseData = require(filePathDefault);
    }
  } catch(err) {
    console.error(err)
  }

  console.log('filePath:', filePath);

  return responseData;
}
