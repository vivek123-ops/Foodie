# 🍔 Food Delivery Management System

A full-stack **Food Delivery Management System** built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The platform connects customers, shop owners, and delivery partners through role-based dashboards.

## 🚀 Project Overview

The Food Delivery Management System is designed to make online food ordering and shop management easier. Customers can browse food items, manage their cart and favourites, and place orders. Shop owners can manage their shops, food items, and incoming orders. Delivery partners have a separate dashboard for the delivery workflow.

## ✨ Features

### 👤 Customer
- User Registration and Login
- Browse Food Shops
- Explore Food Categories
- View Food Items and Details
- Add and Remove Cart Items
- Manage Favourite Food Items
- Place Food Orders
- View Order Information

### 🏪 Shop Owner
- Shop Owner Authentication
- Create and Manage Shop Profile
- Upload Shop Images
- Add and Manage Food Items
- Manage Food Categories
- View Customer Orders
- Update Order Status

### 🛵 Delivery Partner
- Separate Delivery Dashboard
- Role-Based Access
- Delivery Workflow Management

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend |
| Tailwind CSS | UI Styling |
| Redux Toolkit | State Management |
| Axios | API Requests |
| Node.js | Backend Runtime |
| Express.js | REST API |
| MongoDB | Database |
| Mongoose | Database Modeling |
| JWT | Authentication |
| Multer | File Upload |
| Cloudinary | Image Storage |

## 🏗️ Project Architecture

```text
Food-Delivery-Management-System/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── Config/
│   ├── Controller/
│   ├── Middleware/
│   ├── Model/
│   ├── Routes/
│   ├── app.js
│   └── package.json
│
└── README.md
```

*Note: Folder names may differ depending on the final repository structure.*

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to Project

```bash
cd Food-Delivery-Management-System
```

### 3. Setup Backend

```bash
cd backend
npm install
```



Start the backend:

```bash
npm start
```

### 4. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The application will run on the local development URL shown by Vite.

## 🔐 Authentication & Authorization

- JWT-based authentication.
- Protected backend routes.
- Role-based access for customers, shop owners, and delivery partners.
- Password hashing for secure password storage.

## 📦 Database Collections

The project uses MongoDB with Mongoose.

| Collection | Description |
|---|---|
| User | Stores user information and roles |
| Shop | Stores shop details |
| Item | Stores food item information |
| Order | Stores customer orders and order status |

## 🔄 Order Status Workflow

```text
Pending
   ↓
Accepted
   ↓
Start Preparing
   ↓
Delivery
```

An order can also be cancelled through the cancellation workflow.

## 👨‍💻 Project Team

| Name | Department |
|---|---|
| Vivek Shrivastav | CSE |
| Gaurav Singh | AI Department |
| Akash Sharma | DS Department |
| Shubham Kumar | DS Department |

**College:** Mangalmay Institute of Management & Technology, Greater Noida

**Project Type:** Mini Project

## 🔮 Future Enhancements

- Online Payment Gateway Integration
- Real-Time Order Tracking
- Live GPS Delivery Tracking
- Customer Ratings and Reviews
- Push Notifications
- Advanced Food Search and Filters
- Mobile Application

## 🎯 Learning Outcomes

- Full-Stack Web Development
- REST API Development
- MongoDB Database Design
- JWT Authentication
- Redux Toolkit
- Cloudinary Image Upload
- Role-Based Authorization
- Frontend and Backend Integration

## 📄 License

This project is developed for academic and educational purposes.
 
---

**Developed with ❤️ by Team Food Delivery Management System**
