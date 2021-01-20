const express=require('express')
const router=express.Router()
const reportController=require('../controller/report');

router.get('/fetch_data',reportController.fetch_data);

module.exports=router