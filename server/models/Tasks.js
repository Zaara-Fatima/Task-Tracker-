import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        
    },
    status:{
        type:String,
        enum:["Pending", "In-Progress","Completed"],
        default:"Pending"
    },
    priority:{
        type:String,
        enum:["Low", "Medium","High"],
        default:"Low"
    },
    dueDate:Date
},{
    timestamps:true,
})

const Task= mongoose.model("Task",taskSchema)
export default Task