import express from 'express'
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
const server = express()

dotenv.config({ path: '../.env' });


// database connection   

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect(process.env.VITE_APP_MONGODB_URL);
    // await mongoose.connect("mongodb://127.0.0.1:27017/Myportfolio"); // This url use only when you run mongo shell in your command line. 
    console.log("database connected successfully")
}

const userSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    email: String,
    message : String
});

const User = mongoose.model("User" , userSchema)

// server connection 
server.use(cors())
server.use(bodyParser.json())

server.post("/demo", async (req, res) => {
    let user = new User()
    user.name = req.body.name
    user.mobile = req.body.mobile
    user.email = req.body.email
    user.message = req.body.message 

    const doc = await  user.save()
    console.log(doc)
    res.json(doc)
})

server.listen(8080, () => {
    console.log('server is running on port 8080')
})