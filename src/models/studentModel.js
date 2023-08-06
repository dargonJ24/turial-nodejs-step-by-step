import mongoose from "mongoose";
const {Schema} =mongoose
const studentSchema =new Schema({
    name:{
        type:String,
        require:true,
       
    },
    birthaday:{
        type:Date,
        require:true,
    },
    mssv:{
        type:String,
        require:true,
        unique:true
    },
    class:{
        type:String,
        unique:true
    }
})
export const Student =mongoose.model('Student',studentSchema)