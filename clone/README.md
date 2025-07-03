# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

<!-- 
# 🛍️ TataCliq Clone - E-Commerce Web App (MERN Stack)

A fully responsive and visually appealing e-commerce web application inspired by the original TataCliq website. Built using the MERN stack, this clone replicates key functionalities and user experience of TataCliq with modern features, seamless UI/UX, and practical use of localStorage and routing.

---

## 🔗 Live Demo

()&#x20;

---

## 🚀 Tech Stack

* React.js with TypeScript
* Chakra UI + Normal CSS
* React Router DOM
* Axios (for API handling)
* LocalStorage (for cart persistence)

---

## ✨ Features

* 🔄 **Auto Slider on Homepage** with elegant transitions .
* 🎚️ **Button-controlled Slider** to manually navigate banners
* 🔍 **Dynamic Navbar Navigation** with routing to Home, Products, Cart, Login, Signup, etc.
* 📂 **Category & Brand Hover Menus** with rotating arrow and dropdowns
* 🔎 **Search Bar Animation** with rotating placeholders (Product, Brand, Category)
* 📄  **Product Listing**Page with filtering, sorting, and real-time search
* 🧾 **Single Product Page**Single Product Page showing detailed info and Add to Cart option
* 🛒 **Add to Cart** functionality using localStorage (persistent across sessions)
* 🧾 **Cart Page** with quantity, remove item, and price breakdown
* 🛍️ **Buy Now** triggers checkout flow with random Order ID generation
* 💳 **Checkout Page** with shipping form and dummy payment UI
* 🧑‍💼 **Authentication** - Signup and Login with form validation
* 📱 Fully **Responsive** for both mobile and desktop users

---

## 📸 Screenshots

### Home Page

### Product Page

### Cart Page

### Checkout Page

---

## 🛠️ Installation

### Frontend Setup:

```bash
git clone https://github.com/princesinghyadav/tatacliq-clone.git
cd tatacliq-clone
cd CLONE
npm install
npm run dev
```

 
 

## 📁 Folder Structure

```
├── src/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── utils/
│   └── App.tsx
├── public/
└── index.html
```

---

## 🚧 Future Enhancements

* 🛍️ Add real payment gateway (Stripe or Razorpay)
* 📦 Admin panel for product management
* 🔐 Backend is almost ready to implement otp validation 
* 🔐 JWT-based auth system
* 💖 Wishlist functionality
* ⭐ Product ratings and reviews

---

## 🙋‍♂️ Author

**Prince Kumar Yadav**

* [LinkedIn](https://www.linkedin.com/in/princekumarofficial/)
* [GitHub](https://github.com/princekumarofficial)

---

## 📄 License

This project is licensed under the MIT License - feel free to use and modify! -->
