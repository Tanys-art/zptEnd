// const { rejects } = require("assert");
const {
    rejects
} = require("assert");
const fs = require("fs");
const {
    resolve
} = require("path");
exports.dw =async () => {
    // let wineImage = "";
    return new Promise((resolve, reject) => {
        fs.readFile("mongodb/wineImage.json", (err, data) => {
            if (err) reject(err);
            resolve(data.toString());
        })
    });
}