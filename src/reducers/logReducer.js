const logReducer = (state={}, action) => {
    switch (action.type){
        case 'LOG':
            return Object.assign({}, state, {logged: true, name: action.name})
        default:
            return state
    }
}
export default logReducer