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

  res.send('URLs recebidas');
});

app.post('/upload-files', async (req, res) => {

  console.log(req.body.urls);
  res.send('URLs recebidas');
});


  

app.listen(PORT, () => {
    console.log(`escutando na porta ${PORT}`);
});

