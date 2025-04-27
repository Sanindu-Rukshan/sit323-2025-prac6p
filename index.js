//SIT323_4.1P_s223279185

// Import required modules
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Addition Endpoint
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const result = validateAndCalculate(num1, num2, (a, b) => a + b, res);
    if (result !== undefined) res.json({ result });
});

// Subtraction Endpoint
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    const result = validateAndCalculate(num1, num2, (a, b) => a - b, res);
    if (result !== undefined) res.json({ result });
});

// Multiplication Endpoint
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    const result = validateAndCalculate(num1, num2, (a, b) => a * b, res);
    if (result !== undefined) res.json({ result });
});

// Division Endpoint
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (parseFloat(num2) === 0) {
        return res.status(400).json({ error: "Division by zero is not allowed." });
    }
    const result = validateAndCalculate(num1, num2, (a, b) => a / b, res);
    if (result !== undefined) res.json({ result });
});

// Helper function to validate input and perform calculation
function validateAndCalculate(num1, num2, operation, res) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
        res.status(400).json({ error: "Invalid input: num1 and num2 must be valid numbers." });
        return;
    }

    return operation(number1, number2);
}

// Start the server
app.listen(PORT, () => {
    console.log(`Calculator microservice is running on port ${PORT}`);
});

/*
Step-by-Step Documentation:

1. **Setup**:
   - Install Node.js.
   - Create a new project folder and initialize with `npm init -y`.
   - Install Express with `npm install express`.

2. **Build the Server**:
   - Create an `index.js` file (this file).
   - Import `express` and set up the server on port 3000.

3. **Design API Endpoints**:
   - /add, /subtract, /multiply, /divide
   - Each accepts `num1` and `num2` as query parameters.

4. **Input Validation**:
   - Check if inputs are valid numbers.
   - Handle division by zero.

5. **Error Handling**:
   - Return clear JSON error messages for invalid input or operations.

6. **Run the Service**:
   - Use `node index.js`.
   - Test endpoints using Postman or browser.

7. **GitHub Submission**:
   - Push the entire project (with a README explaining setup) to GitHub under the repo name `sit323-2025-prac4p`.
*/
