import mongoose from 'mongoose';

async function db(params) {
  try {
    const connection = await mongoose.connect(process.env.DB_Url);

    console.log(`Mongodb Conneted || ${connection.connection.host}`);
  } catch (err) {
    console.log('error in the conneting the database', err);
  }
}

export default db;
