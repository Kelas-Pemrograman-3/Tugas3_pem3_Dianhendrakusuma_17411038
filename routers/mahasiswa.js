const mahasiswa = require('express')()
const mahasiswacontroller = require('../controller/mahasiswa')

mahasiswa.post('/insert', (req, res) => {
    mahasiswacontroller.insertmahasiswa(req.body)
        .then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

module.exports = mahasiswa