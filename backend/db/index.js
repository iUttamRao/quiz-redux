import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { DB_NAME } from '../constant.js'
dotenv.config({
  path: './.env'
})

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log("MongoDB Connection established !! Host: ", connectionInstance.connection.host)
  }
  catch (error) {
    console.log("MongoDB connection Failed: ", error)
    process.exit(1)
  }
}