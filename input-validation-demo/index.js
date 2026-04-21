// index.js
const express = require('express');
const { validateRegisterInput } = require('./middleware/validate');

const app = express();

// Subtask 2.1: Enable JSON parsing middleware
app.use(express.json());

// Subtask 2.2 & 4.1: Create Demo API Route and Integrate Middleware
// The validateRegisterInput middleware runs first. If it passes, the callback function runs.
app.post('/register', validateRegisterInput, (req, res) => {
    
    // Main Controller Logic
    // If we made it here, we know the data is safe to process/save to a database.
    const { name, email } = req.body;

    res.status(201).json({
        success: true,
        message: "User registered successfully!",
        data: {
            name: name,
            email: email
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});