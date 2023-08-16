let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get('/status', function (req,res){

    res.send('Hello nodejs server belong to Sirichai')
})

app.get('/hello/:name', function(req,res){
    console.log('hello - ' + req.params.name)
    res.send('say hello with ' + req.params.name)
})

app.get('/user/:userId',function(req,res){
res.send('ดูข้อมูลผู้ใช้'+req.params.userId)
})

app.get('/users',function(req,res){
    res.send('ดูข้อมูลผู้ใช้ทั้งหมด')
    })

app.post('/user',function (req,res){
    res.send('สร้างผู้ใช้'+JSON.stringify(req.body))
})

app.put('/user/:userId',function (req,res){
    res.send('เเก้ไขข้อมูลผู้ใช้'+ req.params.userId + " " + JSON.stringify(req.body))
})

app.delete('/user/:userId',function (req,res){
    res.send('ลบผู้ใช้งาน' + req.params.userId + " " + JSON.stringify(req.body.name))
})




let port = 8081
app.listen(port, function(){
    console.log('server runing on ' + port)
})