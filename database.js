var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/test');
db.once('open', function() {
  console.log('连接数据库成功')
})

