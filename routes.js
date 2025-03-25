const express = require('express');
const router = express.Router();
const Item = require('./models/model');

//Read
router.get('/',async (req,res)=>{

  const items = await Item.find();
  res.send(items);
});
module.exports = router;