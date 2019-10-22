import BS from "better-scroll"
import { Twobetter } from './Twobetter.js'
export const betterScroll = function (better,down,count,pageid,limit,fn){
    console.log(better,down)
    return  (function(){
        better = new BS(better, {
            scrollbar: true,//是否开启滚动条
            probeType: 2,// 2滚动的时候实时派发scroll事件
            click:true//是否派发click事件
          });
        better.on('scroll',function(){// - 滚动时触发
        // console.log(this.minScrollY)//滚动高度，最大滚动高度
        if (this.y < this.maxScrollY - 50) {
            down.setAttribute("data-down", "释放加载更多...")//添加属性
        }else if (this.y < this.maxScrollY - 20) {
            down.setAttribute("data-down", "上拉加载...")//添加属性
        }else if(this.y>this.minScrollY + 40){
            down.setAttribute("data-up", "释放刷新...")//添加属性
        } else if (this.y > this.minScrollY+30) {
            down.setAttribute("data-up", "下拉刷新...")//添加属性
        }
        })
        better.on("touchEnd", function() {//手指移开屏幕时触发
        console.log(down.getAttribute("data-up"))
        if (down.getAttribute("data-down") === "释放加载更多...") {//获取属性
            if (this.y<this.maxScrollY - 50){
                    let Num = pageid +=1
                    let lim = limit
                    Twobetter(Num,lim,'drop-down',fn)
                    better.refresh()// 当 better-scroll 刷新时触发强制 scroll 重新计算，当 better-scroll 中的元素发生变化的时候调用此方法
                }
        } 
        if (down.getAttribute("data-up") === "释放刷新..."){
            if(this.y>this.minScrollY + 40){
                let Num = pageid +=1
                let lim = limit
                Twobetter(Num,lim,'drop-up',fn)
                better.refresh()// 当 better-scroll 刷新时触发强制 scroll 重新计算，当 better-scroll 中的元素发生变化的时候调用此方法
            }
        }
    })
  })()
}