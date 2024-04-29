const express = require('express');
const connectDB = require('./api/database/connection');
const userRoutes = require('./api/routes/user-route');
const authenticate = require('./api/middleware/authenticate');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(authenticate.authenticate);

app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});