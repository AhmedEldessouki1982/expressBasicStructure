//in this file it will initiate the schema...
//setup the model (collection)

import mongoose from "mongoose";
import dcrypt from "bcrypt"

// let schema = {
//     name: String,
//     completed: Boolean
// }

// the following scehma created to contains basic validation, basic validation proparties has been included
let schema = {
    email: {
        type: String,
        required: [true, "Provide a valid email address"],
        unique: true
    },
    name: {
        type: String,
        required: [true, "User should add a name"],
        trim: true, //to trim the extra spaces in the provided name proparty
        maxlength: [20, "name can not be more than 20 characters"] // to set tha max length
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password should not less than 6 digits"]

    },
    completed: {
        type: Boolean,
        default: false,
    }
}


const TaskSchema = new mongoose.Schema(schema);

//hashed password using dcrypt package
//using mongoos middleware or hooks
TaskSchema.pre("save", async function (next){
    try {
        const salt = await dcrypt.genSalt(10);
        this.password = await dcrypt.hash(this.password, salt);

    } catch (error) {
        
    }
    next()
})

export const theSchema =  mongoose.model (
    "TaskSchema",
    TaskSchema
)