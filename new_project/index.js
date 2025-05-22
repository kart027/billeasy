// app.js
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoute');
const bookRoutes = require('./routes/bookRoute');
const reviewRoutes = require('./routes/reviewRoute');



dotenv.config();
const app = express();

app.use(express.json());

// Database connection
mongoose
  .connect(process.env.mongoURL, {
  
  })
  .then(async () => {
    console.log("MongoDB Connected");
    
  })
  .catch((err) => console.error("MongoDB Connection Error", err));

// Routes
app.use('/user', authRoutes);
app.use('/books', bookRoutes);
app.use('/review', reviewRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
