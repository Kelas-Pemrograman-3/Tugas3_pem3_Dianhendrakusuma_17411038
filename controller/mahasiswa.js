const mahasiswamodel = require('../models/mahasiswa')

exports.insertmahasiswa = (data) =>
    new Promise((resolve, reject) => {
        mahasiswamodel.create(data)
            .then(res => {
                resolve({
                    error: false,
                    pesan: 'Horay'
                })
            })
            .catch(() => {
                reject({
                    error: true,
                    pesan: 'Gagal'
                })
            })
    })