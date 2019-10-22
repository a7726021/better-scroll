import React, { Component } from 'react'
import {connect} from 'dva'

export default class reduxSaga extends Component {
    componentDidMount(){
        this.props.dispatch({type:'IIC/getBannerData'})
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

let mapstate = (state)=>{
    
    return {
        ...state
    }
}

export default connect(mapstate)(firstCount);

