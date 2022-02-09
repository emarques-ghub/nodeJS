fs = require('fs');

for (let i = 1; i <= 5; i++) {
    var file = "async-text" + i + ".txt";
    fs.writeFileSync(file, "Hello nodeJS!", function(err, out) {
        console.log(out);      
    });
}