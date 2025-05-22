# billeasy
# 📚 Book Review REST API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB** for managing books and reviews with user authentication using JWT.

---

## 🚀 Features

- User Signup & Login (JWT-based authentication)
- Add & View Books
- Filter Books by author or genre
- Review Books (1 review per user per book)
- Update/Delete Your Own Reviews
- Search Books by title or author (case-insensitive, partial match)
- Pagination support for books and reviews

---

## 🧱 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Token (JWT)
- **Environment Management**: dotenv

---

## 📦 Project Structure

│
├── controllers/ # All business logic
├── models/ # Mongoose schemas
├── routes/ # Express routes
├── middlewares/ # Custom middleware
├── .env # Environment variables
├── index.js # Main entry point
└── README.md # This file


// For running 
cd /new_project
npm install
node index.js


//postman collection json
{
  "info": {
    "name": "Book Review API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_postman_id": "book-review-api-collection"
  },
  "item": [
    {
      "name": "Auth - Signup",
      "request": {
        "method": "POST",
        "header": [{ "key": "Content-Type", "value": "application/json" }],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"username\": \"user1\",\n  \"password\": \"password123\"\n}"
        },
        "url": {
          "raw": "http://localhost:5000/signup",
          "protocol": "http",
          "host": ["localhost"],
          "port": "5000",
          "path": ["signup"]
        }
      }
    },
    {
      "name": "Auth - Login",
      "request": {
        "method": "POST",
        "header": [{ "key": "Content-Type", "value": "application/json" }],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"username\": \"user1\",\n  \"password\": \"password123\"\n}"
        },
        "url": {
          "raw": "http://localhost:5000/login",
          "protocol": "http",
          "host": ["localhost"],
          "port": "5000",
          "path": ["login"]
        }
      }
    },
    {
      "name": "Book - Add Book",
      "request": {
        "method": "POST",
        "header": [
          { "key": "Content-Type", "value": "application/json" },
          { "key": "Authorization", "value": "Bearer {{token}}" }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"title\": \"Sample Book\",\n  \"author\": \"John Doe\",\n  \"genre\": \"Fiction\",\n  \"description\": \"A test book\"\n}"
        },
        "url": {
          "raw": "http://localhost:5000/books",
          "protocol": "http",
          "host": ["localhost"],
          "port": "5000",
          "path": ["books"]
        }
      }
    },
    {
      "name": "Book - Get All Books",
      "request": {
        "method": "GET",
        "url": {
          "raw": "http://localhost:5000/books",
          "protocol": "http",
          "host": ["localhost"],
          "port": "5000",
          "path": ["books"]
        }
      }
    },
    {
      "name": "Book - Get Book Details",
      "request": {
        "method": "GET",
        "url": {
          "raw": "http://localhost:5000/books/{{bookId}}",
          "protocol": "http",
          "host": ["localhost"],
          "port": "5000",
          "path": ["books", "{{bookId}}"]
        }
      }
    },
    {
      "name": "Book - Search Books",
      "request": {
        "method": "GET",
        "url": {
          "raw": "http://localhost:5000/books/search?q=sample",
          "protocol": "http",
          "host": ["localhost"],
          "port": "5000",
          "path": ["books", "search"],
          "query": [{ "key": "q", "value": "sample" }]
        }
      }
    },
    {
      "name": "Review - Add Review",
      "request": {
        "method": "POST",
        "header": [
          { "key": "Content-Type", "value": "application/json" },
          { "key": "Authorization", "value": "Bearer {{token}}" }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"rating\": 4,\n  \"comment\": \"Great book!\"\n}"
        },
        "url": {
          "raw": "http://localhost:5000/books/{{bookId}}/reviews",
          "protocol": "http",
          "host": ["localhost"],
          "port": "5000",
          "path": ["books", "{{bookId}}", "reviews"]
        }
      }
    },
    {
      "name": "Review - Update Review",
      "request": {
        "method": "PUT",
        "header": [
          { "key": "Content-Type", "value": "application/json" },
          { "key": "Authorization", "value": "Bearer {{token}}" }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"rating\": 5,\n  \"comment\": \"Updated review\"\n}"
        },
        "url": {
          "raw": "http://localhost:5000/reviews/{{reviewId}}",
          "protocol": "http",
          "host": ["localhost"],
          "port": "5000",
          "path": ["reviews", "{{reviewId}}"]
        }
      }
    },
    {
      "name": "Review - Delete Review",
      "request": {
        "method": "DELETE",
        "header": [{ "key": "Authorization", "value": "Bearer {{token}}" }],
        "url": {
          "raw": "http://localhost:5000/reviews/{{reviewId}}",
          "protocol": "http",
          "host": ["localhost"],
          "port": "5000",
          "path": ["reviews", "{{reviewId}}"]
        }
      }
    }
  ],
  "variable": [
    { "key": "token", "value": "" },
    { "key": "bookId", "value": "" },
    { "key": "reviewId", "value": "" }
  ]
}
