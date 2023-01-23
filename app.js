import express from 'express';
import { engine } from 'express-handlebars';


async function startExpressServer() {
    const app = express();
  
    app.engine("hbs",
        engine({
            extname: "hbs",
            defaultLayout: false
        })
    );
    app.set('trust proxy', 1);
    app.set("view engine", "hbs");    
    app.set('views','./src/views');
    app.disable('x-powered-by');

    app.use('/dist', express.static('dist'));

    app.get('/', function(req, res) {
        res.render('index')
    });
    

    return app.listen(10000, err => {
        console.log(`[ + ] The server is running.`);
    });
}
  
let server = await startExpressServer();
export { server }