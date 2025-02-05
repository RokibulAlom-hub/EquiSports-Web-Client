
# EquiSports: A Sports Equipment Online Store 🏀⚽🎾  

**Live Site URL:** [EquiSports Live](https://gearchamp-authentication.web.app/)  

EquiSports is a responsive, feature-packed e-commerce platform for sports enthusiasts. Whether you're a professional athlete or just starting out, EquiSports offers a seamless experience to browse, purchase, and manage a wide range of sports equipment and apparel.  

---

## Table of Contents 📌  

- [Features](#features-🌟)  
- [Pages](#pages-📄)  
- [Technologies Used](#technologies-used-🛠️)  
- [Installation](#installation-🚀)  
- [Usage](#usage-📖)  
- [Configuration](#configuration-⚙️)  
- [Contributing](#contributing-🤝)  
- [Troubleshooting](#troubleshooting-🐞)  
- [License](#license-📜)  

---

## Features 🌟  

1. **User Authentication**  
   - Login and Registration using Email/Password and Google.  
   - Conditional navbar links displaying user-specific details.  
   - Secure logout functionality and private routes.  

2. **Dynamic and Interactive UI**  
   - Fully responsive design for mobile, tablet, and desktop.  
   - Light/Dark mode toggle for personalization.  
   - Smooth animations using **React Awesome Reveal** and engaging visuals with **Lottie React**.  

3. **Product Management**  
   - View detailed product information and categories.  
   - Add, update, and delete sports equipment with user-specific tracking.  
   - Sort equipment by price (ascending/descending).  

4. **Private Routes**  
   - Secure access to "Add Equipment," "My Equipment List," and detailed product pages.  
   - Personalized dashboard for managing added equipment.  

5. **Error Handling and Alerts**  
   - Beautiful toast notifications using SweetAlert.  
   - Custom 404 page for non-existing routes.  

---

## Pages 📄  

### 1. Home Page  
- Eye-catching banner slider showcasing key products.  
- Product section with "View Details" buttons.  
- Additional sections highlighting the best deals and user testimonials.  

### 2. All Sports Equipment  
- Tabular display of all sports equipment with sorting functionality.  
- Detailed information on clicking "View Details."  

### 3. Add Equipment (Private Route)  
- Form to add new equipment with fields like image, price, category, etc.  
- Logged-in user information is auto-filled for convenience.  

### 4. View Details (Private Route)  
- A beautifully designed page displaying all details of a specific product.  

### 5. My Equipment List (Private Route)  
- Manage your added equipment with update and delete options.  

### 6. Update Page (Private Route)  
- Pre-filled form to edit equipment details and save changes.  

---

## Technologies Used 🛠️  

### **Client-Side:**  
- **React.js** – Component-based UI framework.  
- **Tailwind CSS** & **Daisy UI** – Modern styling.  
- **React Router** – Navigation and route handling.  
- **React Icons** – Icon support.  

### **Server-Side:**  
- **Node.js** & **Express.js** – Backend framework.  
- **MongoDB** – Database for storing equipment details.  

### **Additional Packages:**  
- **SweetAlert** – Stylish notifications.  
- **React Awesome Reveal** & **Lottie React** – Animations.  
- **React Tooltip** – Enhanced UI experience.  

---

## Installation 🚀  

To run the project locally, follow these steps:  

### **1. Clone the Repository**  
```bash
git clone [https://github.com/yourusername/EquiSports.git](https://github.com/RokibulAlom-hub/EquiSports-Web-Client)
cd EquiSports
```

### **2. Install Dependencies**  
For client-side:  
```bash
cd client
npm install
```

For server-side:  
```bash
cd server
npm install
```

### **3. Set Up Environment Variables**  
Create a `.env` file in the `server` directory and add:  
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
```

### **4. Start the Development Server**  
Run the backend:  
```bash
cd server
npm run dev
```

Run the frontend:  
```bash
cd client
npm run dev
```

---

## Usage 📖  

- Visit `http://localhost:5173` (or your assigned port) to explore the store.  
- Login or register to access private features.  
- Add, update, and delete equipment through your personal dashboard.  

---


## Contributing 🤝  

We welcome contributions! Follow these steps:  

1. **Fork the repository**  
2. **Create a new branch** (`git checkout -b feature-name`)  
3. **Make your changes**  
4. **Commit your changes** (`git commit -m "Added new feature"`)  
5. **Push to the branch** (`git push origin feature-name`)  
6. **Create a Pull Request**  

---

## Troubleshooting 🐞  

- **Server not starting?**  
  - Ensure MongoDB is running and `.env` file is correctly set up.  
- **Frontend errors?**  
  - Delete `node_modules` and reinstall:  
    ```bash
    rm -rf node_modules package-lock.json
    npm install
    ```
- **Authentication issues?**  
  - Check the Google OAuth credentials and `.env` values.  

---

## License 📜  

This project is licensed under the **MIT License**. Feel free to modify and use it for your projects!  
