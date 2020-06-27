const express = require('express')
const app = express()
app.listen(3000,()=>{
    console.log('服务启动成功~')
})
app.use(require('cors')())
app.use(express.json())
require('./plugins/db')(app)
require('./routes/admin')(app)

app.use('/uploads',express.static(__dirname + '/uploads'))