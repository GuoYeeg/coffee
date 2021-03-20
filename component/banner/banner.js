// component/banner/banner.js
Component({
  properties:{
    bannerArr:{
      type:Array,
      value:[]
    }
  },
  data: {
    activeNum:0,
  },
  methods:{
    onswipe(e){
      this.setData({
        activeNum:e.detail.current
      })
    }
  }
})