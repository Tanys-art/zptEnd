const dwReservation = require("./mongodb/connectMongodb")
exports.cdw = async (ctx)=>{
    return new Promise((resolve,reject)=>{
        let data = "";
        ctx.req.on("data",(chunk)=>{
            data += chunk;
        });
        ctx.req.on("end",()=>{ //消费数据
            if(data){
                data = JSON.parse(data);
                // console.log(data.wxid,data.rvl.dayTime,data.rvl.minTime)
                if(data.wxid && data.dayTime && data.minTime){ // 客户端传入的数据都合法
                    console.log("reservation接口的数据：",data);
                    resolve(data)
                }
            }
        });
        ctx.req.on("error",(err)=>{
            reject(err)
        })
    });
}
