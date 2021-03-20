// pages/menu/menu.js
let currentTop=0;
let blocksHeight=[]

Page({
  data: {
    bannerArr: [
      '../../images/banner/menubanner1.jpg', 
      '../../images/banner/menubanner2.jpg', 
      '../../images/banner/menubanner3.jpg',
    ],
    menuArr: [
      {
        "id": 0,
        "title": "人气Top",
        "subArr": [
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "拿铁" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "桃桃芝士红宝石" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "咖啡风味安慕希" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "陨石拿铁" }
        ]
      },
      {
        "id": 1,
        "title": "大师咖啡",
        "subArr": [
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "冲绳黑糖拿铁" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "陨石拿铁" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "拿铁" }
        ]
      },
      {
        "id": 2,
        "title": "小鹿茶精选",
        "subArr": [
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "标准美式" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "加浓美式" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "焦糖标准美式" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "焦糖加浓拿铁" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "银河气泡美式" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "银河气泡美式" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "银河气泡美式" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "银河气泡美式" }
        ]
      },
      {
        "id": 3,
        "title": "瑞纳冰",
        "subArr": [
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "乐岛桃桃冰" }
        ]
      },
      {
        "id": 4,
        "title": "鲜榨果蔬汁",
        "subArr": [
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "NFC鲜榨橙汁" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "NFC鲜榨西柚汁" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "猕猴桃复合果汁" }
        ]
      },
      {
        "id": 5,
        "title": "经典饮品",
        "subArr": [
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "巧克力" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "纯牛奶" }
        ]
      },
      {
        "id": 6,
        "title": "健康轻食",
        "subArr": [
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "京味烤鸭鲜蔬卷" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "夏威夷菠萝火山卷" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "火腿芝士羊角" },
          { "imgSrc": "/images/menu/1-1.jpg", "imgDesc": "鸡肉卷" }
        ]
      }
    ],
    leftId:'left1',
    leftNum:0,
    rightId:'right0',
  },
  itemFocus(e){
    // console.log(e);
    this.setData({
      leftId:'left'+e.currentTarget.dataset.myindex,
      leftNum:e.currentTarget.dataset.myindex,
      rightId:'right'+e.currentTarget.dataset.myindex
    })
  },
  onReady(){
    setTimeout(() => {
      const query = wx.createSelectorQuery().in(this)
      query.selectAll('.boxs').boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec(function(res){
        for(let e of res[0]){
          blocksHeight.push(currentTop)
          currentTop+=e.height
        }
        console.log(blocksHeight);
      })
    }, 500);
  },
  changeLeft(e){
    for(let i=0;i<blocksHeight.length;i++){
      console.log(e.detail.scrollTop,blocksHeight[i],blocksHeight[i+1]);
      if(e.detail.scrollTop +10 >= blocksHeight[i] && e.detail.scrollTop+10 < blocksHeight[i+1]){
        console.log(i);
        this.setData({
          leftId:'left'+i,
          leftNum:i,
        })
        return
      } 
    }
  }
})