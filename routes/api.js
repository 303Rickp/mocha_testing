const express = require('express');
const router = express.router();

// middleware to validate the router inputs
  router.post('/:math',(req,res,next)=>{
  if(!req.body.num1 && !req.body.num2) {
    return res.status(432).json({message:'no data foo'});
  }

  next();
});
// routes for the calculator
router.post('/add',(req,res,next)=>{
  res.json({results: req.body.num1 + req.body.num2});
});

module.exports = router
