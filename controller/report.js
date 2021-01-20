const data=require('../data/report_data');

exports.fetch_data=(req,res,next)=>{
  res.send(data)
}