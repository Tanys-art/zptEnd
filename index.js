const dwWineImage =  require('./dwWineImage');
const dwWineCulture = require('./dwWineCulture');
const db = require("./mongodb/connectMongodb").connect();
const Koa = require("koa");
const dwEntrepriseNews = require("./dwEntrepriseNews");
const dwReservation = require("./dwReservation");
const dwFindRv = require("./dwFindRV");
const cdwrv = require("./controlRv");
const cdwfrv = require("./controlFindRv");
// const dwWineImage = require("dwWineImage");
const app = new Koa();
app.use(async ctx=>{
    ctx.request.header = {'Access-Control-Allow-Origin': '*'}
    ctx.response.header = {'Content-Type': 'text/json' };
    switch(true){
        case ctx.path === "/wineCulture":
            let result1 =await dwWineCulture.dw();
            ctx.body = result1;
            break;
        case ctx.path === "/entrepriseNews":
            let result2 =await dwEntrepriseNews.dw();
            ctx.body = result2;
            break;
        case ctx.path === "/wineImage" :
            let result3 =await dwWineImage.dw();
            ctx.body = result3;
            break;
        case ctx.path === "/reservation": 
            let rsResult1 = await cdwrv.cdw(ctx); //验证用户输入数据的合法性
            let findCondition = {wxid:rsResult1.wxid,dayTime:rsResult1.dayTime};
            let findIndex = await dwFindRv.dw(findCondition);
            console.log("查找出的所有结果数据",findIndex)
            if(!findIndex[0]){
                let result4 = await dwReservation.dw(rsResult1);
                if(result4 === "success"){
                    ctx.body = "success"
                }else{
                    ctx.body = result4;
                }
            }else{
                ctx.body= "exist"
            }
            break;
        case ctx.path === "/findRv":
            let rsResult2 = await cdwfrv.cdwf(ctx);
            let result5 = await dwFindRv.dw(rsResult2);
            ctx.body = JSON.stringify(result5)
            break;
        default:
            ctx.status = 404;
            break;
    }
    const dbs = await db;
    dbs.close();
});
app.listen(3000)