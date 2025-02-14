# E-Commerce Web Application (MERN Stack)

## 📌 Overview
This is a full-stack e-commerce web application built using the **MERN** (MongoDB, Express.js, React.js, Node.js) stack. The project includes user authentication & authorization and allows users to browse products, add them to the cart, and place orders.

## 🚀 Features
- User authentication & authorization (JWT-based)
- Role-based access control (Admin & User)
- Product listing and management
- Shopping cart functionality
- Order processing and payment integration
- Responsive UI using React

## 🛠 Tech Stack
- **Frontend:** React.js, Redux, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Token), bcrypt.js
- **Deployment:** Vercel (Frontend), Render/Heroku (Backend)

## 🔑 Authentication & Authorization
- **User Registration & Login** (with JWT token-based authentication)
- **Role-based access control:**
  - Users can browse products and place orders.
  - Admins can manage products and view orders.

## 📂 Project Structure
```
E-Commerce-MERN/
│── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│
│── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── App.js
│   ├── index.js
│
│── .env
│── package.json
│── README.md
```

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/shivam-sd/e-commerce-mern.git
cd e-commerce-mern
```

### 2️⃣ Setup Backend
```sh
cd backend
npm install
npm start
```

### 3️⃣ Setup Frontend
```sh
cd frontend
npm install
npm run dev
```

## 🎯 Environment Variables
Create a `.env` file in the backend directory and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000 || 4000
```

## 📌 API Endpoints
| Method | Endpoint         | Description              |
|--------|----------------|--------------------------|
| POST   | /users/register | User registration      |
| POST   | /users/login    | User login             |


## 🎉 Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

---