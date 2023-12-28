const mongoose=require('mongoose');

// product Schema
const productSchema=new mongoose.Schema({
    donarname:{ type : String, required: true},
    title: { type : String, required: true, unique:false},
    description: { type : String, required: true},
    pickup:{type: Date, required:true},
    stock: { type: Number, required: true},
    stock: { type: Number, min:[0, 'wrong min stock'], default:0},
    category: { type : String, required: true},
    thumbnail: { type : String, required: true},
    images:{ type : [String], required: true},
   

});

// creating vitual id to make it compatible with frontend
const virtual = productSchema.virtual('id');
virtual.get(function(){
    return this._id;
})
productSchema.set('toJSON',{
      virtuals:true,
      versionKey:false,
      transform: function(doc,ret){delete ret._id}
});

// product collection
const Product= new mongoose.model('Product',productSchema);
module.exports = Product;

