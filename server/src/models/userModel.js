import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: String,
    password:String,
    role:{
        type: String
    
    }
})

export default mongoose.model('user',userSchema)