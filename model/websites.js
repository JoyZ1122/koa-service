/*创建一个模型，建立对象与数据库中集合的一个映射*/
var mongoose = require('mongoose');

var Schema = mongoose.Schema; //概要计划，计划往数据库中准备存放哪些信息
var obj = {
  id:Number,
  config:String
}

//建立一个模型，能访问数据库中articles这张表的内容
//参数Article表示数据库中集合名称，不存在会创建
var ArticleModel = mongoose.model('Article', new Schema(obj)); 

module.exports = ArticleModel;
