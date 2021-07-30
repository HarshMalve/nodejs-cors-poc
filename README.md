# nodejs-cors-poc
POC to handle api requests using CORS in NodeJS

1. Clone this repository
2. Run command 'npm install --save'
3. Create .env file and add 'port=8080' to it.
4. Check allowlist array in the file middleware/server_middleware.js for allowed referer & subdomain.
5. Run the project using 'node index.js'.
6. In Postman, try fetching data from 'http://localhost:8080/api/booksAPI/books_routes/books' the API will return 'This domain does not have access to the requested resource' message.
7. Try setting Referer Header or Origin Header or both in the Headers as given in the allowlist array in the file middleware/server_middleware.js, the API will return a JSON data.
