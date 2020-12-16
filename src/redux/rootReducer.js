import { combineReducers } from "redux"
import { data } from '../data.js'

const defaultState = {
    page: 1,
    questions: data
}

const pageReducer = (
    state = defaultState.page,
    action
) => {
    switch (action.type){
        case "NEXT_PAGE":
            console.log(state)
            return state += 1

        case "PREV_PAGE":
            console.log("prev page")
            return state -= 1

        default :
        return state
    }
}

const questionsReducer = (
    state = defaultState.questions,
    action
) => {
    switch (action.type){
        default :
        return state
    }
}

const rootReducer = combineReducers({
    page: pageReducer,
    questions: questionsReducer
})

export default rootReducer