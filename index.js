const express = require('express');
const cors = require('cors');
const merge = require('easy-pdf-merge');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000 ;

app.use(express.static('resources'));


//add other middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Test')
});

app.post('/upload-avatar', async (req, res) => {

  res.send(req);
});

app.post('/upload-files', async (req, res) => {

    console.log(req.body.urls);

    merge(req.body.urls,'./resources/merged.pdf',function(err){
      if(err) {
        return console.log(err)
      }
      console.log('deu merge de boa');
    });

  res.send(req);
});

app.listen(PORT, () => {
    console.log(`escutando na porta ${PORT}`);
});

