/*
the following packs are req for more better check the http req, res
$ npm install body-parser --save
$ npm install cookie-parser --save
$ npm install multer --save
*/
import express from 'express';
const app = express ();
import {userRoute} from './routes/tasks.js';
import { connectDB } from './db/Connect.js';
import './db/Connect.js';
//importing and configuring the dot
import * as dotenv from 'dotenv';
dotenv.config();
//importing not found message page responce middle ware
import notfound from './middleware/notFound.js'
//port
const port = process.env.backEndPort || 8000;



//middleware code

app.use (
    express.json()
)

//routes
app.get (
    '/hello', (req,res) => {
        res.send (
            "server app here, basic setup inhere..."
        )
    }
)

//define the url for the api
app.use (
    "/api/v1/tasks", userRoute
)

app.use(
    notfound
)
//connect db function
let start = async () => {
    try {
        await connectDB(process.env.connectionString)
        app.listen (
            port, console.log(`Server up & running listening to port ${port} :)`)
        )
    }
    catch (err) {
        console.log(err);
    }
}
//define the port that the server will listen to it
// const port = 8000;
// app.listen (
//     port, console.log(`Server up & running listening to port ${port} :)`)
// )
start();