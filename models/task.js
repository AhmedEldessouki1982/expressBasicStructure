//in this file it will initiate the schema...
//setup the model (collection)

import mongoose from "mongoose";

// let schema = {
//     name: String,
//     completed: Boolean
// }

// the following scehma created to contains basic validation, basic validation proparties has been included
let schema = {
    name: {
        type: String,
        required: [true, "must provide a name"],
        trim: true, //to trim the extra spaces in the provided name proparty
        maxlength: [20, "name can not be more than 20 characters"] // to set tha max length
    },
    completed: {
        type: Boolean,
        default: false,
    }
}

const TaskSchema = new mongoose.Schema(schema);

export const theSchema =  mongoose.model (
    "TaskSchema",
    TaskSchema
)