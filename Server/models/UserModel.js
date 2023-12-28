const mongoose =require('mongoose');
const {Schema} = mongoose;

// schema for storing user data

const userDetailSchema=new mongoose.Schema({
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    role:{type:String, required:true, default:'user'},
    addresses: {type: [Schema.Types.Mixed]},
    name:{type:String},
    orders: {type: [Schema.Types.Mixed]},

});

const virtual = userDetailSchema.virtual('id');
virtual.get(function(){
    return this._id;
})
userDetailSchema.set('toJSON',{
      virtuals:true,
      versionKey:false,
      transform: function(doc,ret){delete ret._id}
});

//creating collections

const User=mongoose.model('User',userDetailSchema);
module.exports=User;



