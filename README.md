# 🛍️ The Nook Store

A responsive e-commerce web application for browsing products.
Users can search and filter products, log in, and view a personalized dashboard with order and cart details.
The dashboard allows checking each user’s cart items in a **modal popup** with product details and total price calculation.

---

## ✨ Features

- **Product Listing**

  - Browse clothing, jewelery and electronics products
  - Dynamic product cards with image, price, rating, and count
  - Responsive grid layout for all devices

- **Search & Filter**

  - Search products by name
  - Filter products by category
  - Highlight selected filter category

- **Authentication**

  - Login page with form validation
  - Authorization logic using cookies
  - Redirects based on login status

- **Dashboard**

  - Display all registered users with details (name, username, email, phone, address)
  - View individual user carts in a modal
  - Show cart items with product image, title, quantity, and price
  - Calculate and display total payment amount

- **Order Management**

  - Simulated order placement from cart view
  - Display purchase date and owner details

- **Utilities**
  - Cookie handling (set/get/delete)
  - HTTP requests with reusable `getData` and `postData`
  - Text shortening for product titles
  - Form validation

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, Vanilla JavaScript (ES6+)
- **UI & Styling:** Responsive design, Flexbox/Grid, Font Awesome icons
- **APIs & Data:**
  - Fake Store API (products, users, carts)
- **Other:** Modular JS structure, Event-driven DOM manipulation

---

## 📸 Demo

👉 [Live Demo on Vercel](https://nook-store.vercel.app/)


---

## 🚀 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/merajparsazad/nook-store.git

# Navigate to the project folder
cd nook-store

# Open index.html in your browser
```

## 📜 License
This project is licensed under the [MIT License](./LICENSE)
