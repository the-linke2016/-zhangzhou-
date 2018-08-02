var data = require('../../../data/data.js');
var articlesList = data.articlesList;
Page({
  data: {
    articlesList: articlesList,
    btnType: 0
  },
  onLoad: function (options) {
    this.setData({
      btnType: options.btnType
    });
  }
})