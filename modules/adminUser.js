const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://pms-demo:@Aa1Bb2Hh3@@cluster0.ngu0t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology:true,useFindAndModify:false,});
var conn =mongoose.Collection;
var adminUserSchema =new mongoose.Schema({
    email:{type:String,
    },
    password: {
        type:String, 
    },
    date:{
        type: Date, 
        default: Date.now }
});

var adminUserModel = mongoose.model('adminUsers',adminUserSchema);
module.exports=adminUserModel;


//'mongodb+srv://abhishek_dhakad:Aa1Bb2Hh3@cluster0.fxygu.mongodb.net/<dbname>?retryWrites=true&w=majority'