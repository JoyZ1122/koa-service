const websiteModel = require('../model/websites');
require('../database');

const getWebsiteList = async (ctx, body) => {
  console.log('COMING',ctx, body)

  const res = await websiteModel.find({});
  ctx.body = {
    code: 200,
    message: '查询成功',
    data: res
  }
}
const savewebsiteconfig = async (ctx, body) => {
  const website= new websiteModel({
    id: ctx.request.body.name,
    config: ctx.request.body.config
  })
  const res = await website.save();
  ctx.body = {
    code: 200,
    message: '查询成功',
    data: res
  }
}
module.exports = {
  getWebsiteList,
  savewebsiteconfig
}
