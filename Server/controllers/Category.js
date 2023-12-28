const Category = require("../models/Category");


exports.fetchCategories = async (req, res) => {
    
    try{
        const categories = await Category.find({}).exec();
        res.status(200).json(categories);
    }catch(err){
        res.status(400).json(err);
    }

  };

  exports.createCategory = async (req, res) => {
    const category = await Category(req.body);
    try{
        category.save();
        res.status(201).json(category);
    }catch(err){
        res.status(400).json(err);
    }

  };