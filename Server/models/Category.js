const mongoose=require('mongoose');

// product Schema
const categorySchema=new mongoose.Schema({

    label: { type : String, required: true, unique:true},
    value: { type : String, required: true, unique:true},

});

// creating vitual id to make it compatible with frontend
const virtual = categorySchema.virtual('id');
virtual.get(function(){
    return this._id;
})
categorySchema.set('toJSON',{
      virtuals:true,
      versionKey:false,
      transform: function(doc,ret){delete ret._id}
});

// product collection
const Category= new mongoose.model('Category',categorySchema);
module.exports = Category;

