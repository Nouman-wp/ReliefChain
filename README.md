# 🌱 ReliefChain

**ReliefChain** is a decentralized donation platform built to bring **transparency, trust, and speed** to the world of donations. It was conceptualized and developed during the **Hackers Playground Hackathon at MIET Meerut**.

Whether you want to **donate funds**, **support relief campaigns**, or **create a cause**, ReliefChain ensures every step is **trackable and verifiable** using blockchain and a user-friendly interface.

---

## 🚀 Features

- 🧾 **Create Campaigns** – Let users or NGOs start fundraisers with detailed descriptions and images.  
- 💸 **Donate with Ease** – Simple and secure donation flow (money or goods).  
- 📊 **Track Donations** – Visual insights into how much has been raised and by whom.  
- 👤 **User Dashboard** – Personalized dashboard to manage campaigns, donations, and more.  
- 🔒 **Authentication** – Secure login/signup using Passport.js  
- 🌐 **Blockchain Integration** *(coming soon)* – Every donation can be recorded immutably using smart contracts.  

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js  
- **Frontend**: EJS, HTML, Bootstrap  
- **Database**: MongoDB + Mongoose  
- **Authentication**: Passport.js (Local Strategy)  
- **Image Uploads**: Cloudinary + Multer  
- **File Structure**: MVC architecture with clean modular routes and controllers  
- *(Planned)* **Smart Contracts**: Solidity + Web3.js for Ethereum-based donations  

---

## 📁 Project Structure

```
reliefchain/
├── client/
│   ├── views/           # EJS templates (pages, layouts, partials)
│   └── public/          # Static assets (CSS, JS, Images)
├── server/
│   ├── config/          # DB, Passport, Cloudinary configs
│   ├── controllers/     # Business logic
│   ├── middleware/      # Auth, error handling, file upload
│   ├── models/          # Mongoose schemas (User, Campaign, Donation)
│   ├── routes/          # All routes (auth, campaign, donation, etc.)
│   └── app.js           # Main server entry
├── contracts/           # Solidity smart contracts (WIP)
└── README.md
```

---

## 📸 Screenshots

> _(I will Add screenshots here once your UI is polished.)_

---

## 🧠 How It Works

1. **Signup/Login** as a donor or campaign creator  
2. **Create a Campaign** with a goal, image, and description  
3. **Donate** to any campaign (only visible after login)  
4. **Track Progress** with real-time updates on raised amount  
5. *(Upcoming)* **Verify on Blockchain** for transparent transaction logs  

---

## 🧪 Local Setup

```bash
git clone https://github.com/Nouman-wp/reliefchain.git
cd reliefchain
npm install
# Configure your .env file (Mongo URI, Cloudinary, etc.)
npm run dev
```

Required `.env` variables:

```
MONGO_URI=your_mongo_connection_string
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
SESSION_SECRET=supersecret
```

---

## 🏗 Upcoming Features

- ✅ PDF donation receipts  
- ✅ Email verification + notifications  
- ⚙️ Admin panel for campaign approvals  
- 💬 Real-time chat between donors and campaigners  
- 🧾 NFT-based donation certificates  
- 🌐 Full Web3 Integration + Blockchain explorer  

---

## 👥 Team

This project was built by **Nouman** and team at **Hackers Playground 2025**.  
We believe technology should be used to solve real problems — like **lack of transparency in donations**.

---
## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌍 Let’s Make Giving Better

ReliefChain is more than just a project — it's a step toward a world where **every rupee/dollar donated can be tracked**, and **impact is measurable**.

---
