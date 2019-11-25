const mongoose = require('mongoose')
const Schema = mongoose.Schema


const MatakuliahSchema = new Schema({
    namamk: {
        type: String
    },
    hari: {
        type: String
    },
    jam: {
        type: String
    },
    ruang: {
        type: String
    },
    sks: {
        type: String
    },
    dosen: {
        type: String
    }
})

module.exports = mongoose.model('Matakuliah', MatakuliahSchema)