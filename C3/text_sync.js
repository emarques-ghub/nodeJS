fs = require('fs');

for (let i = 1; i <= 5; i++) {
    var file = "sync-text" + i + ".txt";
    var out = fs.writeFileSync(file, "Hello nodeJS!");
    console.log(out);
}