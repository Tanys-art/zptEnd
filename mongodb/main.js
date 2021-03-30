const db = require("./connectMongodb").connect();

(async () => {
    // 插入一条数据
    let insertOne = async ()=>{
        const dbs = await db;
        const dbase = await dbs.db("zpt");
        let hlq1 = {
            wxid: "0414",
            reservationList: [{
                begintime: "20000",
                endtime: "30000"
            }]
        }
        await dbase.collection("reservation").insertOne(hlq1, (err, res) => {
            if (err) throw err;
            console.log("插入数据成功");
            dbs.close();
        })
    }
    // 插入多条数据
    let insertMany = async ()=>{
        const dbs = await db;
        const dbase = await dbs.db("zpt");
        const arrList = [];
        dbo.collection("site").insertMany(myobj, function(err, res) {
            if (err) throw err;
            console.log("插入的文档数量为: " + res.insertedCount);
            db.close();
        });
    }
    // 创建集合
    let createCollection = async ()=>{
        const dbs = await db;
        const dbase = await dbs.db("zpt");
        dbase.createCollection('site', function (err, res) {
            if (err) throw err;
            console.log("创建集合!");
            db.close();
        });
    }
    // 查询数据
    let select = async ()=>{
        const dbs = await db;
        const dbase = await dbs.db("zpt");
        dbase.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            console.log(result);
            db.close();
        });
    }
    // 更新一条数据

    let updateOne = async ()=>{
        const dbs = await db;
        const dbase = await dbs.db("zpt");
        const updateStr = {$set: { "url" : "https://www.stuhlq.ltd" }};
        dbo.collection("site").updateOne(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log("文档更新成功");
        db.close();
        });
    }

    // 更新多条数据

    let updateMany = async ()=>{
        const dbs = await db;
        const dbase = await dbs.db("zpt");
        let whereStr = {}; // 查询条件
        let updateStr;
        dbase.collection("site").updateMany(whereStr, updateStr, function(err, res) {
            if (err) throw err;
             console.log(res.result.nModified + " 条文档被更新");
            db.close();
        });
    }
    // 删除一条数据

    let deleteOne = async ()=>{
        const dbs = await db;
        const dbase = await dbs.db("zpt");
        let whereStr = {"name":'菜鸟教程'};  // 查询条件
        dbase.collection("site").deleteOne(whereStr, function(err, obj) {
            if (err) throw err;
            console.log("文档删除成功");
            db.close();
        });
    }

    // 删除多条数据
    let deleteMany = async ()=>{
        const dbs = await db;
        const dbase = await dbs.db("zpt");
        var whereStr = { type: "en" };  // 查询条件
        dbo.collection("site").deleteMany(whereStr, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " 条文档被删除");
        db.close();
    });
    }
    // 升序排序
    let sort = async ()=>{
        const dbs = await db;
        const dbase = await dbs.db("zpt");
        var mysort = { type: 1 }; // type 为1 升序，为-1 降序
        dbase.collection("site").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
    }
    // let deleteOne = async ()=>{
    //     const dbs = await db;
    //     const dbase = await dbs.db("zpt");
    // }
});

(async () => {
    const dbs = await db;
    const dbase = await dbs.db("zpt");
    let result = await dbase.collection("reservation").insertOne({name:"hello"});
    console.log(result);
})()



// const MongoClient = require("mongodb").MongoClient;
// let URL = "mongodb://localhost:27017/zpt";
// MongoClient.connect(URL,(err,db)=>{
//     if(err) throw err;
//     // console.log("数据库已连接");
//     let hlq = {
//         wxid:0413,
//         reservationList:[
//             {
//                 begintime:"20000",
//                 endtime:"30000"
//             }   
//         ]
//     }
//     console.log(db);
//     const dbase = db.db("zpt");
//     dbase.collection("reservation").insertOne(hlq,(err,res)=>{
//         if(err) throw err;
//         console.log("插入数据成功");
//         // db.close();
//     })
// })