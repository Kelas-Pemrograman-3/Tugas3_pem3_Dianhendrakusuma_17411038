const MatakuliahModel = require('../models/Matakuliah')

exports.insertMatakuliah = (data) =>
    new Promise((resolve, reject) => {
        MatakuliahModel.create(data)
            .then(res => {
                resolve({
                    error: false,
                    pesan: 'HORAY BERHASIL'
                })
            })
            .catch(() => {
                reject({
                    error: true,
                    pesan: 'Yah gagal'
                })
            })
    })