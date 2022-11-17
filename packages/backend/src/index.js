const express = require('express')
const cookieParser = require('cookie-parser');

const authRoute = require('./routes/auth.routes')

const app = express()
const port = 8000

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoute);

app.listen(port, () => {
  console.log(`Backend is running on ${port}`);
});

module.exports = app;