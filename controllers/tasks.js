//this include all crud action in same component
import { theSchema } from "../models/task.js";
//import error handlling function
import errorHandlling from "../error/errorHandlling.js";

//get req
//in the get crud operation we can use the quey methods of the mongoose
//as it can be understadable that model.find({}) can returns that all the objects stord inside the db
//in our example here the model is name: theSchema
//however the queries in the mongoos are not a promise function however we can use await and async words
//and as mentioned on the POST if any await function avaible it shall be inside try..catch block
export const getAllTasks = async (req,res) => {
    try {
        let tasks = await theSchema.find({}) //emepty {} obeject passed refering that find function will bring all.
        //dont forget in every and each CRUD operation to include the res function.
        res.status(200).json(                   
            {tasks}
        )
        
    } catch (error) {
        let theCatchedError = errorHandlling (error);
        res.status(500).json({msg: error})        
    }
    // res.send(
    //     "All tasks items"
    // )
}

//post req
// async function used after implementing the schema
//try ...catch block has been added after implementing the validation items in the schema, as a rule
//dont impelement await /async function without tray catch block
export const createTask = async (req,res) => {
    try {
        let task = await theSchema.create (req.body);
        res.status(201).json(
            {task}
        )
        
    } catch (error) {
        let theCatchedError = errorHandlling (error);
        res.status(500).json({theCatchedError})             
    }
}

//get req with spesific param =, by access object req.params
export const getTask = async (req,res) => {
    try {
        const task = await theSchema.findOne({_id:req.params.id});
        if (!task) {
            return res.status(404).json({msg: `error id:${req.params.id} not availble`});
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg: "syntax error"})
    }
    // res.json(
    //     {id: req.params.id}
    // )
}

//put/ patch req
export const updateTask = async (req,res) => {
    try {
        const task = await theSchema.findOneAndUpdate (
            {
                _id:req.params.id, 
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        if (!task) {
            return res.status(404).json({msg: `error id:${req.params.id} not availble`});
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg: "syntax error"})
    }

    // res.send(
    //     "Update the task"
    // )
}

//delete req
export const deleteTask = async (req,res) => {
    try {
        const task = await theSchema.findByIdAndDelete ({_id:req.params.id});
        if (!task) {
            return res.status(404).json({msg: `error id:${req.params.id} not availble`});
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: "syntax error"})
    }

    // res.send(
    //     "delet Task"
    // )
}