# Using React Router DOM 🚀

This repository demonstrates how to build a simple React application with **React Router DOM** for navigation and routing. The application includes multiple pages such as `Home`, `About`, `Contact Us`, `Login`, and a protected `Dashboard` accessible only to authenticated users.

---

## 🔥 Features
- **React Router DOM**: Navigate seamlessly between multiple pages without reloading.
- **Login Authentication**: Basic form validation for username and password.
- **Error Handling**: Informative error messages for invalid login attempts or empty fields.
- **Responsive Design**: Adaptable layout for various screen sizes.
- **Modular Structure**: Each component is well-organized for reusability and scalability.

---

## 📂 Folder Structure
```
.
├── src
│   ├── Components
│   │   ├── About.js       # About Page Component
│   │   ├── ContactUs.js   # Contact Us Page Component
│   │   ├── Dashboard.js   # Dashboard Component (protected)
│   │   ├── Home.js        # Home Page Component
│   │   ├── Login.js       # Login Page Component
│   ├── CSS
│   │   ├── Login.css      # CSS for the Login Component
│   ├── App.js             # Main App Component with Routes
│   ├── index.js           # Application Entry Point
│   ├── App.css            # Global CSS
├── public
│   ├── index.html         # HTML template
├── package.json           # Project Metadata
└── README.md              # Documentation (You are here!)
```

---

## 🛠️ Technologies Used
- **React.js**: Frontend library for building user interfaces.
- **React Router DOM**: Library for handling client-side routing.
- **CSS**: Styling the components for a polished UI.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/LayuruLK/Using-React-Router-Dom.git
cd Using-React-Router-Dom
```

### 2. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed. Then run:
```bash
npm install
```

### 3. Run the Application
Start the development server:
```bash
npm start
```

Open your browser and visit: [http://localhost:3000](http://localhost:3000)

---

## 🧭 Application Workflow

### Navigation
The application includes the following pages:
1. **Home**: General information about the app.
2. **About**: Details about the app and its features.
3. **Contact Us**: A contact form for users to reach out.
4. **Login**: A login form to authenticate users.
5. **Dashboard**: A protected page accessible only after successful login.

### Login Credentials
- **Username**: `admin`
- **Password**: `123`

### Error Handling
- Displays a red error message if required fields are empty or credentials are invalid.

---



---

## 📜 Code Highlights

### App.js
Defines the routes for the application using `React Router DOM`:
```jsx
<Routes>
  <Route path='/home' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<ContactUs />} />
  <Route path='/login' element={<Login />} />
  <Route path='/dash' element={<Dashboard />} />
</Routes>
```

### Login.js
Handles user authentication with form validation and error messages:
```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.username || !formData.password) {
    setError("Please Fill All Required Fields!");
    return;
  }
  if (formData.username === 'admin' && formData.password === '123') {
    navigate('/dash');
  } else {
    setError("Invalid username or password!");
  }
};
```

---

## 🎨 Styling
- **Global CSS (`App.css`)**: Basic layout and navigation styling.
- **Component-specific CSS (`Login.css`)**: Focused styling for the Login page.

### Login.css
```css
.login-form input {
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
.login-form button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}
```

---

## 📖 Learn More
- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [React Router DOM Documentation](https://reactrouter.com/web/guides/quick-start)

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repository and submit a pull request.

---

## ⚖️ License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author
**Your Name**  
- GitHub: [LayuruLK](https://github.com/LayuruLK)

---

Enjoy coding! 🚀
