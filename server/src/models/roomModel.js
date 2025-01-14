import mongoose from 'mongoose'
import ReportedBookings from './ReportedBookings'

const RoomSchema = new mongoose.Schema({
    configuration: String,
    ReportedBookings: String,

    teacher_id:{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    student_id:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    }
})