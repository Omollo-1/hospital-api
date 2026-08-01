# Hospital Inventory System

## Project Description

The Hospital Inventory System is a RESTful API built with Node.js and Express.js for managing hospital inventory. It enables users to create, retrieve, search, update, and delete inventory items efficiently while demonstrating CRUD operations and REST API developme nt.

## Features

- Add new inventory items
- View all available inventory
- Search for a particular inventory item by ID
- Search for an inventory item by name
- Update an item's information
- Remove expired or unavailable items

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman
- Git
- GitHub

## Dependencies

- Express
- Nodemon
- Dotenv

## Installation

1. Clone the repository.

```bash
git clone https://github.com/Omollo-1/hospital-api.git
```

2. Navigate to the project directory.

```bash
cd hospital-api
```

3. Install dependencies.

```bash
npm install
```

4. Start the server.

```bash
node server.js
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/inventory` | Add a new inventory item |
| GET | `/inventory` | Fetch all inventory items |
| GET | `/inventory/:id` | Fetch a single inventory item by ID |
| GET | `/inventory/search?name=value` | Search an inventory item by name |
| PUT | `/inventory/:id` | Update an inventory item |
| DELETE | `/inventory/:id` | Delete an inventory item |

## Inventory Item Structure

Each inventory item contains the following information:

- ID
- Name
- Category
- Quantity
- Price
- Expiry Date

## Expected Response

HTTP Status Codes
200 - Ok
201 - Created
400 - Bad Request
404 - Not Found
500 - Internal Server Error

## Testing

All API endpoints were successfully tested using Postman.

The projects includes testing for: 
- GET
- POST
- PUT
- DELETE
- Search endpoint

## Live Demo

Run the project locally using:

```bash
node server.js
```

The API runs locally at:
http://localhost:5000

## Repository

GitHub Repository:
https://github.com/Omollo-1/hospital-api

## Project Task Distribution

| Task | Description | Assigned To |
|------|-------------|-------------|
| Task 1 | Set Up the Project | Gerry |
| Task 2 | Create Server.js | Ricky Bruce |
| Task 3 | Create HospitalItem.js | Amahini |
| Task 4 | View All Hospital Items | Ricky Bruce |
| Task 5 | Search for a Hospital Item by ID | Kabunga Charles |
| Task 6 | Search for a Hospital Item by name | Shine |
| Task 7 | Edit a Hospital Item | Mide |
| Task 8 | Delete a Hospital Item | Ricky Bruce |
| Task 9 | Display Friendly Messages | Eugene |
| Task 10 | Test Using Postman | Eugene |
| Task 11 | Upload to GitHub | Eugene |
| Task 12 | Prepare Project Documentation (README) | Shine |
| Task 13 | Project Presentation | Gerry |

## Contributors

This project was developed by **Group 5C**

- Gerry - Project Setup (Omollo-1)
- Ricky Bruce - CRUD Operations (Rickybruce)
- Amahini - Data Structure (Mary-09cloud)
- Kabunga Charles - Search by ID (charlesk513)
- Eugene - Postman Testing and GitHub Upload (Youjinedo)
- Shine - Documentation (Shinnie-web)

## Git Workflow

This project was developed collaboratively using Git and GitHub.

- Each team member worked on a seperate Git branch.
- Changes were committed regularly with meaingful commit messages.
- Pull Requests (PRs) were created before merging chnages.
- Code was reviewed before being merged into the main branch.

This workflow helped maintain code quality and allowed multiple team members to work on the project simultaneously without conflicts.

## License

This project was developed for educational purposes.
