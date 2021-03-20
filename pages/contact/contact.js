// pages/contact/contact.js
// const customCallout1 = {
//   id: 1,
//   latitude: 45.713395,
//   longitude: 126.619915,
//   iconPath: '../../images/location.png',
//   width:50,
//   anchor:{
//     x:.6,
//     y:.5
//   },
//   // customCallout: {
//   //   anchorY: 0,
//   //   anchorX: 0,
//   //   display: 'ALWAYS'
//   // },
// }
// const customCallout2 = {
//   id: 2,
//   latitude: 45.722553,
//   longitude: 126.628683,
//   iconPath: '../../images/location.png',
//   width:50,
//   anchor:{
//     x:.6,
//     y:.5
//   },
//   // customCallout: {
//   //   anchorY: 0,
//   //   anchorX: 0,
//   //   display: 'ALWAYS'
//   // },
// }
// const allMarkers = [customCallout1, customCallout2]

// 引入SDK核心类
import QQMapWX from '../../utils/qqmap-wx-jssdk.min';
// 实例化API核心类
var qqmapsdk = new QQMapWX({
    key: 'TOYBZ-F2A3U-UGDVY-4HNOW-APKR6-KEBYO' // 必填
});

Page({
  data: {
    longitude:126.627186,
    latitude:45.719061,
    // markers:allMarkers,
    // polyline:[{
    //   points:[
    //     {
    //       longitude: 126.619915,
    //       latitude: 45.713395,
    //     },
    //     {
    //       longitude: 126.628683,
    //       latitude: 45.722553,
    //     }
    //   ],
    //   color:'#ff0000',
    //   width:'4rpx'
    // }],

  },
  onReady(){
    var _this = this;
    //调用距离计算接口
    console.log(qqmapsdk);
    
    qqmapsdk.direction({
      mode: 'driving',//可选值：'driving'（驾车）、'walking'（步行）、'bicycling'（骑行），不填默认：'driving',可不填
      //from参数不填默认当前地址
      from:{
        longitude: 126.619915,
        latitude: 45.713395,
      },
      to: {
        longitude: 126.628683,
        latitude: 45.722553,
      }, 
      success: function (res) {
        console.log(res);
        var ret = res;
        var coors = ret.result.routes[0].polyline, pl = [];
        //坐标解压（返回的点串坐标，通过前向差分进行压缩）
        var kr = 1000000;
        for (var i = 2; i < coors.length; i++) {
          coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
        }
        //将解压后的坐标放入点串数组pl中
        for (var i = 0; i < coors.length; i += 2) {
          pl.push({ latitude: coors[i], longitude: coors[i + 1] })
        }
        console.log(pl)
        //设置polyline属性，将路线显示出来,将解压坐标第一个数据作为起点
        _this.setData({
          latitude:pl[0].latitude,
          longitude:pl[0].longitude,
          polyline: [{
            points: pl,
            color: '#FF0000',
            width: 4
          }]
        })
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  }
})