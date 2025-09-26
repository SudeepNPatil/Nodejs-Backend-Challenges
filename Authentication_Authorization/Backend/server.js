import express from 'express';
import cors from 'cors';
import db from './Config/db.config.js';
import auth from './Routes/auth.js';

const app = express();

app.use(cors());
app.use(express.json());

db();

app.use('/', auth);

app.listen(process.env.PORT, () => {
  console.log(
    'Server is up and running on port http://localhost:' + process.env.PORT
  );
});
