// var http = require('http');
// var fs = require('fs');

// var leituraAsync = require('./leitura_async');
// var leituraSync = require('./leitura_sync');

// var arquivo = "./node.exe";

// var stream = fs.createWriteStream(arquivo);

// var download = "http://www.editorapontocom.com.br/livro/45/fotografia_45_57d802d609447.pdf";

// http.get(download,function(res){
//     console.log("Fazendo download do Node.js");
//     res.on('data',function(data){
//         stream.write(data);
//     });
//     res.on('end',function(){
//         stream.end();
//         console.log("Download finalizado!");
//         leituraAsync(arquivo);
//         leituraSync(arquivo);
//     });
// });

const http = require('http');
const fs = require('fs');
const leituraAsync = require('./leitura_async');
const leituraSync = require('./leitura_sync');

const arquivo = './node-v16.9.0.tar.gz';
const stream = fs.createWriteStream(arquivo);

const download = "http://www.editorapontocom.com.br/livro/45/fotografia_45_57d802d609447.pdf";

http.get(download, (res) => {
  console.log('Fazendo download do Node.js');
  res.on('data', (data) => stream.write(data));
  res.on('end', () => {
    stream.end();
    console.log('Download finalizado!');
    leituraAsync(arquivo);
    leituraSync(arquivo);
  });
});
