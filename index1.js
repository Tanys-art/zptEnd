const Koa = require("koa");
const dwWineImage =  require('./dwWineImage');
const dwWineCulture = require('./dwWineCulture');
const dwEntrepriseNews = require("./dwEntrepriseNews");
// const dwWineImage = require("dwWineImage");
const app = new Koa();
app.use((ctx)=>{
    switch(true){
        case ctx.path === "/wineCulture":
            let result1 =dwWineCulture.dw();
            ctx.response.header = {'Content-Type': 'text/json' };
            result1.then(d=>{
                ctx.body = d
                console.log(d)
            });
            break;
            // console.log(result1)
            // ctx.body = "/wineCulture"
        case ctx.path === "/entrepriseNews":
            let result2 =dwEntrepriseNews.dw();
            ctx.response.header = {'Content-Type': 'text/json' };
            result2.then(d=>ctx.body = d);
            ctx.body = "/entrepriseNews";
            break;
        case ctx.path === "/wineImage" :
            // ctx.body = "/wineImage"
            let result3 =dwWineImage.dw();
            ctx.response.header = {'Content-Type': 'text/json' };
            result3.then(d => ctx.body = d);
            // console.log(result)
            break;
        default:
            ctx.body = "lxy sb"
            break;
    }
});
app.listen(3000);
