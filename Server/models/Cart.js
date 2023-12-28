const mongoose=require('mongoose');
const {Schema} = mongoose;

// product Schema
const cartSchema=new mongoose.Schema({

    quantity: { type : Number, required: true},
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true},
    user:{ type: Schema.Types.ObjectId, ref: 'User', required: true},

});

// creating vitual id to make it compatible with frontend
const virtual = cartSchema.virtual('id');
virtual.get(function(){
    return this._id;
})
cartSchema.set('toJSON',{
      virtuals:true,
      versionKey:false,
      transform: function(doc,ret){delete ret._id}
});

// product collection
const Cart= new mongoose.model('Cart',cartSchema);
module.exports = Cart;

