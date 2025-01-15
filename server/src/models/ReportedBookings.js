import mongoose from "mongoose";



const singleLessonItemSchema = mongoose.Schema({
  sign: {
    type: mongoose.Schema.ObjectId,
    ref: 'lesson',
    required: true,
  },
})

const reportedBookingSchema = new mongoose.Schema({
    prupose:String,
    dateFilterable: Date,
    isRedDay: Boolean,
     status: {
    type: String,
    enum: ['pending', 'failed', 'booked','canceled'],
    default: 'pending',
  },
   bookedLessonsOnTheCurrentDay:[singleLessonItemSchema]
})

export default mongoose.model('order', reportedBookingSchema)