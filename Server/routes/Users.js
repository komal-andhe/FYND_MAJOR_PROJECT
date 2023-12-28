const express = require('express');
const { fetchUserByTd, updateUser } = require('../controllers/User');


const router=express.Router();
// users is already added in base path
router.get('/:id',fetchUserByTd)
      .patch('/:id', updateUser);


exports.router =router;