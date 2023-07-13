require('./models/db')
const express = require('express')
const path = require('path')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyparser = require('body-parser')

const studentController = require('./controllers/studentController')

let app = express()

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.get('/', (req, res)=>{
    res.send(
        `<h2>Welcome to Students Database!</h2>
<h3>Click here to get access to the <b><a href="/student/list">Database</a></b></h3>`
    );
});

app.set('views', path.join(__dirname, '/views/'))
app.engine('hbs', exphbs.engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: 'hbs',
    defaultLayout: 'maiLayouts',
    layoutsDir: __dirname + '/views/layouts/',
})
);

app.set('view engine', 'hbs')

app.listen(4000, ()=>{
    console.log('server started ad port 4000')
});

app.use("/student", studentController);
