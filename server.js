const server = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 5000
const mongoURI = 'mongodb://localhost:port:27017/family'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connect to db sucess')
}).catch(err => {
    console.log('error' + err)
})

server.use(bodyParser.json({
    extended: 'true',
    limit: '50mb'
}))

server.use(bodyParser.urlencoded({
    extended: 'true',
    limit: '50mb'
}))

server.use('/mahasiswa', require('./routers/mahasiswa'))
server.use('/Matakuliah', require('./routers/Matakuliah'))

server.listen(port, function() {
    console.log('server started on port' + port)
})