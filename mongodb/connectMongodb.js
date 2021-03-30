const MongoClient = require("mongodb").MongoClient;
let URL = "mongodb://localhost:27017/zpt";

exports.connect =async ()=>{
    return new Promise((resolve,reject)=>{
        let url = "mongodb://localhost:27017";
        MongoClient.connect(url,{ useUnifiedTopology: true },(err,db)=>{
            if(err) reject(err);
            resolve(db)
        })
    })
}
