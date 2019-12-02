import {ADD_ARTICLE , FORBIDDEN_WORD} from "../constants/action-type"

const forbiddenWords=["money","fuck"]

export function forbiddenWordsMiddleware({dispatch}){
    return function(next){
        return function(action){
            if(action.type==ADD_ARTICLE){

                const foundWord=forbiddenWords.filter(word=>action.payload.title.includes(word))
                console.log(action.payload.title)
                if(foundWord.length){
                    console.log(foundWord.length)
                    return dispatch({type:FORBIDDEN_WORD});
                }
            }

            return next(action)
        }
    }
}