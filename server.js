const express = require('express');
const app = express();
const PORT = 5000;

// Simple API route
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the backend server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});