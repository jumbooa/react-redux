import {ADD_ARTICLE , REMOTED_DATA} from "../constants/action-type"

const initialState={
    articles:[],
    remotedData:[]
}

function rootReducer(state=initialState , action){

    if(action.type==ADD_ARTICLE){
        return Object.assign({} , state , {
           articles:state.articles.concat(action.payload) 
        })
    }

    if(action.type==REMOTED_DATA){
        return Object.assign({} , state , {
            remotedData:state.remotedData.concat(action.payload)
        })
    }
    
    return state;
}

 export default rootReducer