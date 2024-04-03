const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({
    storage: storage
})

const app = express()
const port = 3000
app.set('view engine', 'ejs');

// chỉ định thư mục gốc 
app.use(express.static('assets'))
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))



// const errorController = require('./controllers/error');

// server.js 
const clientRoutes = require('./routes/client');
app.use(clientRoutes);

const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

