import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { DB_NAME } from './constant.js'
dotenv.config({
  path: '.env'
})
const app = express()

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log("MongoDB Connection established !! Host: ", connectionInstance.connection.host)
  }
  catch (error) {
    console.log("MongoDB connection Failed: ", error)
    process.exit(1)
  }
}

app.get("/", (req, res) => {
  res.send("Hello World")
})

connectDB().then(() => {
  app.listen(5000, () => {
    console.log("Server is running at port 5000")
  })
}).catch((err) => {
  console.log("DB connection Failed", err)
})
