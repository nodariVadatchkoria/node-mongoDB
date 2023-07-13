const mongoose = require('mongoose').default;

mongoose.connect('mongodb://127.0.0.1:27017/studentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connection succeeded');
}).catch(err => {
    console.log('Error in connection: ' + err);
});
require('./student.model')