const express = require('express');
// var docxConverter = require('docx-pdf');

const app = express();

const PORT = process.env.PORT || 3000  ;

app.get('/', (req, res) => {
    res.send('Hello Test')
});

app.listen(PORT, () => {
    console.log(`escutando na porta ${PORT}`);
});


// docxConverter('./resources/Example.docx','./resources/Example.pdf',function(err,result){
//   if(err){
//     console.log(err);
//   }
//   console.log('result'+result);
// });