// const fs = require("fs");
const db = require("./mongodb/connectMongodb").connect();
exports.dw =async (data) => {
    // let wineImage = "";
    return new Promise(async (resolve, reject) => {
        const dbs = await db;
        const dbase = await dbs.db("zpt");
        let hlq1 = {
            wxid: "1345",
            rvl: {
                dayTime:2000,
                minTime:3000
            }
        }
        hlq1 = data
        await dbase.collection("rv").insertOne(hlq1, (err, res) => {
            if (err) reject(err);
            resolve("success");
            // dbs.close();
        })
    });
}