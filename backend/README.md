# Itabaza API

## Overview
Itabaza is a RESTful API built using Express.js and MongoDB.so far, It provides endpoints for user authentication, coffin management, event handling, service management, flower handling, and cemetery management.

## Technologies Used
- **Node.js** (Express.js)
- **MongoDB** (Mongoose ODM)
- **Postman** (API testing)
- **JWT Authentication**
- **Multer** (For handling form data)

## Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd itabaza-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add your configurations:
   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_secret_key>
   EMAIL_USER=<your_email>
   EMAIL_PASS=<your app password>
   ```
4. Start the server:
   ```sh
   npm start
   npm run dev
   ```

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/verify-otp` | Verify OTP for user authentication |
| POST   | `/api/auth/forgot-password` | Request a password reset |
| POST   | `/api/auth/reset-password` | Reset password using token |
| POST   | `/api/auth/login` | User login |

### Coffin Management
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | `/api/coffins/` | Add a new coffin |
| GET    | `/api/coffins/` | Get all coffins |
| GET    | `/api/coffins/:id` | Get a specific coffin |

### Event Management
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | `/api/events/` | Add a new event |
| GET    | `/api/events/` | Get all events |
| GET    | `/api/events/:id` | Get a specific event |

### Service Management
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | `/api/services/service` | Add a new service |
| GET    | `/api/services/` | Get all services |
| GET    | `/api/services/:id` | Get a specific service |

### Flower Management
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | `/api/flowers/` | Add a new flower |
| GET    | `/api/flowers/` | Get all flowers |
| GET    | `/api/flowers/:id` | Get a specific flower |

### Cemetery Management
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | `/api/cemeteries/` | Add a new cemetery |
| GET    | `/api/cemeteries/` | Get all cemeteries |
| GET    | `/api/cemeteries/:id` | Get a specific cemetery |

## Running Tests
You can use Postman to test the API endpoints by importing the provided Postman collection.
