'use strict';
// 云函数入口文件
const cloud = require('wx-server-sdk')
exports.main = (event, context, callback) => {
    console.log("Hello World123")
    console.log(event)
    console.log(event["non-exist"])
    console.log(context)
    callback(null, event);
};
