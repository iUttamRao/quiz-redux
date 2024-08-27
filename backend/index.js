import { connectDB } from './db/index.js'
import { app } from './app.js'


connectDB().then(() => {
  app.listen(5000, () => {
    console.log("Server is running at port 5000")
  })
}).catch((err) => {
  console.log("DB connection Failed", err)
})
