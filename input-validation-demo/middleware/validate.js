// middleware/validate.js

const validateRegisterInput = (req, res, next) => {
    const { name, email, password } = req.body;
    const errors = [];

    // Subtask 3.1: Validate Required Fields
    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields. Name, email, and password are required."
        });
    }

    // Subtask 3.2: Email Format Validation (Using Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("Invalid email format.");
    }

    // Subtask 3.3: Password Length Validation
    if (password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }

    // Subtask 4.2: Send Structured Validation Errors
    // If there are any specific formatting errors, send them back
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Invalid input data",
            errors: errors // Sends the array of specific errors
        });
    }

    // Subtask 5.2: Prevent Invalid Requests
    // If the code reaches this next() function, the data is 100% valid!
    // It will now pass control to the main route in index.js.
    next(); 
};

module.exports = { validateRegisterInput };