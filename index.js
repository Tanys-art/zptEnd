const Koa = require("koa");
const dwWineImage =  require('./dwWineImage');
const dwWineCulture = require('./dwWineCulture')
const dwEntrepriseNews = require("./dwEntrepriseNews")
// const dwWineImage = require("dwWineImage");
const app = new Koa();
app.use(async ctx=>{
    switch(true){
        case ctx.path === "/wineCulture":
            let result1 =await dwWineCulture.dw();
            ctx.request.header = {'Access-Control-Allow-Origin': '*'}
            // ctx.request.setHeader('Access-Control-Allow-Origin','*')
            ctx.response.header = {'Content-Type': 'text/json' };
            ctx.body = result1;
            // ctx.body = "/wineCulture"
            break;
        case ctx.path === "/entrepriseNews":
            let result2 =await dwEntrepriseNews.dw();
            ctx.request.header = {'Access-Control-Allow-Origin': '*',}
            ctx.response.header = {'Content-Type': 'text/json'};
            ctx.body = result2;
            // ctx.body = "/entrepriseNews";   
            break;
        case ctx.path === "/wineImage" :
            // ctx.body = "/wineImage"
            let result3 =await dwWineImage.dw();
            ctx.request.header = {'Access-Control-Allow-Origin': '*',}
            ctx.response.header = {'Content-Type': 'text/json' };
            ctx.body = result3;
            // console.log(result)
            break;
        default:
            ctx.status = 404;
            break;
    }
});
app.listen(3000)