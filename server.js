const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Food & Wellness API is running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
