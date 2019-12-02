import {ADD_ARTICLE , REMOTED_DATA} from "../constants/action-type"

export function addArticle(payload){
    return {type:ADD_ARTICLE , payload}
}

export function getData(){
    
    return function(dispatch){
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response=>response.json())
            .then(json=>{
                return dispatch({type:REMOTED_DATA , payload:json})
            })
    }
}