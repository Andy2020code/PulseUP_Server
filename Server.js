
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

// Body parser (JSON)
app.use(express.json());

// In-memory user storage (for demonstration purposes)
const users = [
    { username: 'Anderson', password: 'password123' }
];

// Route to handle user login
app.post('/login', async (req, res) => {
    const username = req.body.username; // Fixed typo: 'usernme' to 'username'
    const password = req.body.password;

    // Find the user by username
    const authUser = users.find(user => user.username === username && user.password === password); // Fixed the property access

    if (authUser) {
        // Generate a JWT token
        const token = jwt.sign({ username: authUser.username }, "SECRET");

        // If token is generated, send it to the client
        res.status(200).json({ Token: token });
    } else {
        res.json({ message: "Authentication failed" });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
