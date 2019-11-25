const express = require('express');
// var docxConverter = require('docx-pdf');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const _ = require('lodash')
const merge = require('easy-pdf-merge');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000 ;

app.use(express.static('resources'));

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello Test')
});

app.post('/upload-avatar', async (req, res) => {
    
  res.send(req.body.files);
});

app.post('/upload-files', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let data = []; 
    
            //loop all files
            _.forEach(_.keysIn(req.files.photos), (key) => {
                let photo = req.files.photos[key];
                
                //move photo to uploads directory
                photo.mv('./uploads/' + photo.name);

                //push file details
                data.push({
                    name: photo.name,
                    mimetype: photo.mimetype,
                    size: photo.size
                });
            });

            // merge(source_files,dest_file_path,function(err){
            //     if(err) {
            //       return console.log(err)
            //     }
            //     console.log('Success')
            //   });

            const d = data.map(d => {
                return { fileUrl: path.resolve(__dirname, d.name) } ;
            })
            
            //return response
            res.send({
                status: true,
                message: 'Files are uploaded',
                data: data,
                filesUrls: d
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});


  

app.listen(PORT, () => {
    console.log(`escutando na porta ${PORT}`);
});

