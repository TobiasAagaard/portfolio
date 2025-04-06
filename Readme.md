# My Portfolio

This is my personal portfolio project showcasing my skills, projects, and experience. The project is built with a **React TypeScript** frontend and an **ASP.NET** backend REST Api.

## Technologies Used

### Frontend
- **React** (with TypeScript)
- Modern component-based architecture

### Backend
- **Go (Gin Framework)**
- RESTful API built using the Gin web framework
- Handles project data, contact form submissions, and other dynamic portfolio content
- Organized with a clean MVC structure: `models`, `controllers`, and `routes`
- JSON-based communication for seamless integration with frontend applications


## Setup Instructions

### Frontend
1. Navigate to the `frontend` folder.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```
4. Access the portfolio at `http://localhost:5173` (or configured port).

### Backend
1. Navigate to the `backend` folder.
2. Restore dependencies:
    ```bash
    dotnet restore
    ```
3. Run the backend:
    ```bash
    dotnet run
    ```
4. The API will be available at `http://localhost:5000` (or configured port).
