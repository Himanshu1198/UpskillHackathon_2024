const express = require('express');
const app = express();
const userRouter  = require('./routers/users.js');

const { handleError } = require('./utils/error.js');
const {initialize} = require('./middleware/auth.js');
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));
app.use((req, res, next) => {
    const { method, path } = req;
    console.log(
      `New request to: ${method} ${path} at ${new Date().toISOString()}`
    );
    next();
  });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(initialize());
app.use(handleError);
app.use("/api/v1/users", userRouter);

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
