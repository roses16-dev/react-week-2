

const TOGGLE_ISDONE = "TOGGLE_ISDONE"
const DELETE_TODO = "DELETE_TODO"
const ADD_TODO = "ADD_TODO"


export const toggleIsDone = (payload) => {
    return {
        type: TOGGLE_ISDONE,
        payload: payload
    }
}

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload: payload
    }
}

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload
    }
}

const initialState = {
    todoList: [
        {
            id: 0,
            isDone: true,
            title: 'React 배워보기',
            subtitle: 'props, state 쓰기',
        }, 
        {
            id: 1,
            isDone: false,
            title: 'Redux 배워보기',
            subtitle: 'module, store 만들기',
        }
    ]
}

//리듀서
export default function todoList(state = initialState, action){

    switch(action.type){
        case "TOGGLE_ISDONE" :
            return {
                todoList: state.todoList.map(element => {
                    if(element.id === action.payload)
                        element.isDone = !element.isDone
                    return element
                })
            }
        case "DELETE_TODO" :
            return {
                todoList: state.todoList.filter(element => {
                if(element.id === action.payload) return false
                return true
                })
            }
        case "ADD_TODO" :
            return {
                todoList: [...state.todoList, action.payload]
            }
        default:
            return state
    }
}