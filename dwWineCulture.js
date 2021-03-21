const fs = require("fs");

exports.dw =async () => {
    // let wineImage = "";
    return new Promise((resolve, reject) => {
        fs.readFile("mongodb/wineCulture.json", (err, data) => {
            if (err) reject(err);
            resolve(data.toString());
        })
    });
}