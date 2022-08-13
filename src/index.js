const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://sumitnegi:BzD3JE4W4s2UzXR6@cluster0.diszcfl.mongodb.net/sumitnegi_8859066597?retryWrites=true&w=majority"
   ,{ 
    useNewUrlParser:true
   }
)
.then(() => console.log("MongoDB is connected"))
.catch( err => console.log(err))
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
