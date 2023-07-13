const mongoose = require('mongoose').default;

// mongoose.connect('mongodb://127.0.0.1:27017/studentDB', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         seCreateIndex: true
//     },
//     err => {
//         if (!err) {
//             console.log('Connection succeeded')
//         } else {
//             console.log('Error in connection' + err)
//         }
//     })
mongoose.connect('mongodb://127.0.0.1:27017/studentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connection succeeded');
}).catch(err => {
    console.log('Error in connection: ' + err);
});
require('./student.model')