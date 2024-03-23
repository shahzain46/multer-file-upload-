const express = require('express');
const multer = require('multer');
const port = process.env.PORT || 5000
const app = express();

const fileStorageEngine = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './images')
    },
    filename: (req,file,cb) => {
        cb(null, Date.now() + "--" + file.originalname)
    }
}) 

const upload = multer({storage : fileStorageEngine})

app.post('/single',upload.single('image'),(req,res)=>{
    console.log(req.file)
    res.send('single file upload success')
})





app.listen(port, () => {
    console.log(`server is listening to port ${port} `)
})