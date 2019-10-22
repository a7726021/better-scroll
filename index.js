import { indexs } from '../axios/axios.js'
console.log(indexs)
export default {
    namespace:'IIC',
    state:{
        data:null,
    },
    effects:{//异步东西处理完毕才能执行reducers
        *getBannerData(_,{put,call}) {//put 触发reducer下的方法  call为了解决异步，相当于.then
            const reponse = yield call(indexs)
            console.log(reponse)
            yield put({type:'GetBanner',data:reponse.data})
            // yield put({ type: 'GetBanner', BannerData: reponse.data.data})
            // console.log(reponse)
        }

    },
    reducers:{
        GetBanner(state,action) {
            console.log(action.data)
            return {
                ...state,
                data:action.data
            }
          },
    }
}