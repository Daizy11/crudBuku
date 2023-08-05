const express = require('express')
const app = express()
const buku = require('./routes/buku')


// app.post('/submit',crudController.createBuku, catchAsync((req, res) => {
//     const { judul, penerbit , genre,harga} = req.body
//     res.status(201).json({
//         status:"success",
//         data : judul,penerbit,genre,harga
//     })
// }))
//middlewares
app.use(express.json())
app.use(express.static(__dirname + '/views'));

app.get('/',(req,res)=>{
    res.render('tampilan')
})


//routes
app.use('/api/v1/buku',buku)


module.exports = app 