# Expense Tracker with Firebase

This is a **Expense Tracker** web application built with **React** and **Firebase**. The app allows users to record and manage their expenses, and it leverages Firebase for user authentication and real-time data storage. Firebase Firestore is used to store expense data, while Firebase Authentication enables user sign-up and login.

## Features

- **User Authentication**: Sign up and log in with email/password or Google.
- **Expense Tracking**: Users can add, view, edit, and delete expenses.
- **Real-Time Updates**: Data is synchronized in real-time, so changes to expenses are reflected immediately in the app.
- **Expense Categorization**: Track expenses by category (e.g., food, travel, entertainment).
- **Timestamping**: Each expense is timestamped with the date and time it was added.
- **Responsive Design**: The app is built to be responsive and mobile-friendly.

## Tech Stack

- **Frontend**: React, React Router
- **Backend**: Firebase (Firestore, Authentication, Cloud Functions)
- **Database**: Firebase Firestore
- **Authentication**: Firebase Authentication (Email/Password, Google)
- **Hosting**: Firebase Hosting (optional, if hosting the app)

## Prerequisites

Before you begin, make sure you have the following:

- **Firebase Account**: Create a Firebase account at [Firebase Console](https://console.firebase.google.com/).
- **Firebase Project**: Set up a Firebase project and enable Firebase Authentication and Firestore.
- **Node.js and npm**: Make sure you have Node.js and npm installed. If not, you can download it from [here](https://nodejs.org/).
- **React Knowledge**: Basic knowledge of React and React hooks (e.g., `useState`, `useEffect`).

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/itsaman080/Track-my-expenses.git
cd Track-my-expenses
```

### 2. Install Dependencies

Run the following command to install all necessary dependencies for the project:

```bash
npm install
```

### 3. Set up Firebase

- Go to the [Firebase Console](https://console.firebase.google.com/).
- Create a new project and set up Firestore and Firebase Authentication.
- Enable **Email/Password** or **Google** authentication in the Firebase Console.
- Obtain your Firebase project configuration from the Firebase Console and add it to your React app (usually in `src/firebase-config.js`).

Example Firebase config in `firebase-config.js`:

```javascript
// firebase-config.js

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
```

### 4. Firebase Security Rules

Ensure that your Firestore security rules are configured to protect user data. Example rules for Firestore:

```json
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
      match /expenses/{expenseId} {
        allow read, write: if request.auth.uid == userId;
      }
    }
  }
}
```

### 5. Running the Project

To run the project locally, use the following command:

```bash
npm start
```

This should start the React development server, and the app will be available at `http://localhost:3000` in your browser.


## Folder Structure

Here's an overview of the folder structure for this project:

```
expense-tracker-firebase/
│
├── public/                # Public assets (index.html, favicon, etc.)
├── src/                   # Source code
│   ├── components/        # React components (ExpenseForm, ExpenseList, etc.)
│   ├── firebase-config.js # Firebase configuration
│   ├── App.js             # Main app component
│   ├── AuthContext.js     # Context for handling user authentication
│   └── index.js           # App entry point
├── .gitignore             # Git ignore file
├── README.md              # Project README
├── package.json           # Project dependencies and scripts
└── firebase.json          # Firebase project configuration for hosting
```


## Security Considerations

- **Authentication**: Always ensure that users are authenticated before accessing or manipulating their data.
- **Data Validation**: Implement client-side validation to ensure that expense data is in the correct format (positive amounts, valid categories, etc.).
- **Firestore Rules**: Use Firestore security rules to ensure that users can only read and write their own expenses.

## Future Improvements

- **Budget Management**: Add a feature that allows users to set monthly budgets and receive alerts when they exceed their spending limits.
- **Analytics**: Visualize expenses with charts and graphs to help users analyze their spending patterns.
- **Custom Categories**: Allow users to create custom expense categories.
- **Export Data**: Allow users to export their expenses in CSV or PDF formats.

## Contributing

Feel free to fork this repository and submit pull requests. Any improvements or bug fixes are welcome!
