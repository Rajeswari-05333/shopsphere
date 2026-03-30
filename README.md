##ShopSphere
ShopSphere is a modern and responsive e-commerce web application built using React. It allows users to browse products, filter and sort items, add them to cart, manage quantities, and simulate a checkout experience.
---

Live Demo
🌐(https://rajeswari-shopsphere.netlify.app/)
---

Features

- Add to Cart functionality
- Cart item count with dynamic updates
- Increase/Decrease product quantity
- Remove items from cart
- Cart data stored using Local Storage
- Search products by name
- Filter by category
- Price range filter (slider)
- Sorting (Low → High, High → Low, Rating)
- Fully responsive UI
- Payment & Success page simulation
---

Tech Stack

- Frontend: React.js
- Styling: CSS (Inline + Custom Styling)
- State Management: useState, useEffect
- Routing: React Router
- Storage: Local Storage
- Deployment: Netlify

---
Project Structure

src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Cart.jsx
│   ├── Payment.jsx
│   ├── Success.jsx
│
├── data/
│   ├── products.js
│
├── App.jsx
└── main.jsx

---

Installation & Setup

1. Clone the repository:

git clone (https://github.com/Rajeswari-05333/shopsphere)

2. Navigate to project folder:

cd shopsphere

3. Install dependencies:

npm install

4. Run the project:

npm run dev

---

Deployment

Deployed using Netlify:

- Build Command: "npm run build"
- Publish Directory: "dist"

---

Future Improvements

- User authentication (Login/Signup)
- Order history
- Real payment gateway integration
- Product reviews & ratings
- AI-based product recommendations

---

Author

Rajeswari Behera

---

Acknowledgements

- Inspired by modern e-commerce platforms
- Built for learning and portfolio development

---
