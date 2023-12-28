const mongoose=require('mongoose');
const {Schema} = mongoose;

// product Schema
const orderSchema=new mongoose.Schema({

    items:{type:[Schema.Types.Mixed], required : true},
    totalItems:{type:Number},
    user:{ type: Schema.Types.ObjectId, ref: 'User', required: true},
    status:{type:String, default:'pending'},
    selectedAddress:{type:Schema.Types.Mixed, required:true}

});

// creating vitual id to make it compatible with frontend
const virtual = orderSchema.virtual('id');
virtual.get(function(){
    return this._id;
})
orderSchema.set('toJSON',{
      virtuals:true,
      versionKey:false,
      transform: function(doc,ret){delete ret._id}
});

// product collection
const Order= new mongoose.model('Order',orderSchema);
module.exports = Order;

