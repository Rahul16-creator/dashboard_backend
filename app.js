const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const reportRouter=require('./router/report');
const path =require('path')
const app=express()
const port=process.env.PORT || 8000




app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST"
    );
    next();
  });


app.use(bodyParser.json());
app.use(cors());

// app.use(reportRouter);

app.listen(port,()=>{
    console.log(`App is connected to ${port} port`)
})






