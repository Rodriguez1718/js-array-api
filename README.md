# Simple Pet API

A lightweight REST API built with Node.js and Express, using an in-memory array instead of a database.

## Features
- Get all pets (`GET /pets`)
- Get a pet by ID (`GET /pets/:id`)
- Add a new pet (`POST /pets`)
- Update a pet (`PUT /pets/:id`)
- Delete a pet (`DELETE /pets/:id`)

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/js-api.git
   cd js-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node server.js
   ```
   or use `nodemon` for automatic restarts:
   ```sh
   npx nodemon server.js
   ```
4. The API will run on `http://localhost:3000`

## API Endpoints

### Get All Pets
- **Request:**
  ```http
  GET /pets
  ```
- **Response:**
  ```json
  [
    { "id": 1, "name": "Buddy", "type": "Dog" },
    { "id": 2, "name": "Mittens", "type": "Cat" }
  ]
  ```

### Get a Pet by ID
- **Request:**
  ```http
  GET /pets/:id
  ```
- **Example:** `GET /pets/1`
- **Response:**
  ```json
  { "id": 1, "name": "Buddy", "type": "Dog" }
  ```

### Add a New Pet
- **Request:**
  ```http
  POST /pets
  Content-Type: application/json
  ```
  ```json
  {
    "name": "Charlie",
    "type": "Bird"
  }
  ```
- **Response:**
  ```json
  { "id": 3, "name": "Charlie", "type": "Bird" }
  ```

### Update a Pet
- **Request:**
  ```http
  PUT /pets/:id
  Content-Type: application/json
  ```
  ```json
  {
    "name": "Charlie Updated",
    "type": "Parrot"
  }
  ```
- **Response:**
  ```json
  { "id": 3, "name": "Charlie Updated", "type": "Parrot" }
  ```

### Delete a Pet
- **Request:**
  ```http
  DELETE /pets/:id
  ```
- **Response:**
  ```json
  { "message": "Pet deleted" }
  ```

## CORS
By default, this API allows requests from any origin using:
```javascript
const cors = require("cors");
app.use(cors());
```
To restrict access to a specific frontend (e.g., React on `http://localhost:5173`), update:
```javascript
app.use(cors({ origin: "http://localhost:5173" }));
```

## License
This project is open-source. Feel free to modify and use it as needed!

---

Made with ❤️ by [Kris John S. Rodriguez]

