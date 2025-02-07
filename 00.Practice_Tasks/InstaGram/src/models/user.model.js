const mongoose =require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minLength: [3,"Username must be at least 3 characters long"],
        maxLength: [20,"Username must be most 20 characters long"]
    },
    email: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        minLength: [5,"Username must be at least 3 characters long"],
        maxLength: [50,"Username must be most 20 characters long"]
    },
    password:{
        type:String
    },
    profileImage:{
        type:String,
        default: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"post"
    }],
    follower:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }]
})

const userModel = mongoose.model("user",userSchema)
module.exports = userModel;