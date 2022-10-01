//1. importing mongoos instance
import mongoose from "mongoose";
//2. copied from atlas online setup db page, under connection menu select connect the app
//then dont forget to add the db name
//3. method name in the mongoos instance name .connect
// mongoose.connect(connectionString)
// .then(()=>console.log("connected to the db..."))
// .catch((err)=>console.log(err));

//4. it has been found more efficant to start communication with db before connecting to the backend server
//the idea is to create the following function to invoke the db connectione before connecting to server
export let connectDB = (url) => {
    return (
        mongoose.connect(url)
        .then(()=>console.log("connected to the db..."))
        .catch((err)=>console.log(err))
    )
}