import { indexs } from '../../axios/axios.js'
export const Twobetter = function(Num,lim,type,fn){
    return (function(){
        console.log(Num,lim)
        indexs(Num,lim).then(({data})=>{
            if (!data.length) {
                alert('暂无数据')
                return
            }else{
                let newArr = data
                fn(newArr,Num,lim,type)
            }
        })
    })()
}