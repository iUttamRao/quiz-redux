import express from 'express'
import { connectDB } from './db/index.js'
const app = express()

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
