const express = require('express')
const app = express()
const path = require('path')
app.use(require('cors')())
app.use(express.json())
app.set('secret', '123jiotrk4wotkj32opfior34')

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/admin', express.static(path.join(__dirname, 'admin')))
app.use('/', express.static(path.join(__dirname, 'web')))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)



app.listen(3000, () => {
    console.log('http://localhost:3000')
})