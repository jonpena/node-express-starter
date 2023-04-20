import 'dotenv/config';
import { connect } from 'mongoose';

const dbConnect = async () => {
  try {
    const DB_URI = <string>process.env.DB_URI;
    console.log('Trying to connect to:', DB_URI);
    await connect(DB_URI);
    console.log('Successful Connection with Database');
  } catch (error) {
    console.log('Not Connect with the Database');
  }
};

export default dbConnect;
