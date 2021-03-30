exports.cdwf =async (ctx)=>{
    return new Promise(async (resolve,reject)=>{
        let data = "";
        ctx.req.on("data",(chunk)=>{
            data +=chunk;
        });
        ctx.req.on("end",()=>{
            if(data){
                data = JSON.parse(data);
                if(data.wxid){
                    resolve(data)         
                }
            }
        });
        ctx.req.on("error",()=>{
           reject(error) 
        })
    })
} 