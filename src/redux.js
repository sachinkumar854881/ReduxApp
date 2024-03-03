// const Redux = require("redux")
import {createStore, combineReducers} from 'redux'

const initialData = {
    allTasks:["Eating","Coding"]
}

export function addTask(task)
{
    return{
        type:"ADD_TASK",
        payload:task
    }
}

const myReducer = (state = initialData, action) => 
{
    if(action.type == "ADD_TASK")
    {
        return{
            allTasks : [...state.allTasks, action.payload]
        }
    }
    return state
}
const manyReducer = combineReducers({
    myReducer : myReducer
})

export const myStore = createStore(manyReducer)