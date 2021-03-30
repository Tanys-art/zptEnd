const db = require("./mongodb/connectMongodb").connect();
exports.dw = async (data)=>{
    return new Promise(async (resolve,reject)=>{
        const dbs = await db;
        const dbase = dbs.db("zpt");
        dbase.collection("rv").find(data).toArray((err,result)=>{
            if(err) reject(err);
            resolve(result);
            // dbs.close();
        })
    })
}