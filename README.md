# Server for static Stub API

## Simple static stub API Node.js based 

```
The most simplest server stub API
Serve static json files according to URL
```
- End points URL can start with /api/v1/
- Add folders with .json extension to serve the json as response
- The response will analyze the path and will return the file is specified of default.json from the designated folder.


## Start the server
```
$ node node server-stub-api.js
```

Server is running on
```
http://localhost:8001
```

## Add response files in the directories
```http://localhost:8001/api/v1/{dir1?}/{dir2?}/{filename?}```

- file name can be specified in the url with or without .json extension.
- if file name is not specified, than the server will return the file default.json

## Examples

----
- http://localhost:8001/example-api
- http://localhost:8001/api/v1/example-api

Server will return the file - ./example-api/default.json

-----

- http://localhost:8001/example-api/playlist
- http://localhost:8001/example-api/playlist.json
- http://localhost:8001/api/v1/example-api/playlist
- http://localhost:8001/api/v1/example-api/playlist.json

Server will return the file - ./example-api/plylist.json

-----

