function time (resolve,reject){
    var timer = Math.ceil(Math.random()*10)
    console.log('随机数为'+timer)
    //promise
    if(timer<=5){
        resolve('success')
        console.log('成功')
    } else {
        reject('error')
        console.log('失败','随机数大于5')
    }
}
var promise = new Promise(time).then((res)=>{
    console.log(res,'res')
}).catch((res)=>{
    console.log(res,'res')
})