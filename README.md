# nodejs-cors-poc
POC to handle api requests using CORS in NodeJS

## Clone this repository
## Run command 'npm install --save'
## Create .env file and add 'port=8080' to it.
## Check allowlist array in the file middleware/server_middleware.js for allowed referer & subdomain.
## Run the project using 'node index.js'.
## In Postman, try fetching data from 'http://localhost:8080/api/booksAPI/books_routes/books' the API will return 'This domain does not have access to the requested resource' message.
## Try setting Referer Header or Origin Header or both in the Headers as given in the allowlist array in the file middleware/server_middleware.js, the API will return a JSON data.
