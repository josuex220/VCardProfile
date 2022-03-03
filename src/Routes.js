const app = require('./model/Express');
const Pages = require('./controller/Pages');

class Route{
    routes(){
        app.get('/', Pages.home);
        app.get('/api', Pages.api);
    }
    init(){
        var port = process.env.PORT || 5000;
        app.listen(port, (err)=>{
            if(err) throw err;
            console.log(`Rodou Na porta: ${port}`);
        });
    }
}

module.exports = new Route;