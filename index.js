const express = require('express');
const cors = require('cors');
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
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Test')
});

app.post('/upload-avatar', async (req, res) => {

  res.send(req.body);
});

app.post('/upload-files', async (req, res) => {
    console.log(req.body.urls);

  res.send(req.body.urls);
});

app.listen(PORT, () => {
    console.log(`escutando na porta ${PORT}`);
});

