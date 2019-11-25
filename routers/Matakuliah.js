const Matakuliah = require('express')()
const Matakuliahcontroller = require('../controller/Matakuliah')

Matakuliah.post('/insert', (req, res) => {
    Matakuliahcontroller.insertMatakuliah(req.body)
        .then(result => {
            res.json(result)
        }).catch(err => {})
})

module.exports = Matakuliah