import express from 'express';
import cors from 'cors';
import db from './Config/db.config.js';
import userrouter from './Routes/user.router.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

db();

app.use(cors());
app.use(express.json());

app.use('/', userrouter);

app.listen(process.env.PORT, () => {
  console.log(
    'Server is up and running on port http://localhost:' + process.env.PORT
  );
});
