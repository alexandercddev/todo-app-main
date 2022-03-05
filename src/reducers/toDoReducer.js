
const toDoReducer = ( state = [], action) => {
    switch (action?.type) {
        case 'add': 
            return [ ...state, action.payload]; 
        case 'delete': 
            return state.filter( item => item.id !== action.payload);
        case 'toggle':
            return state.map( item => (
                ( item.id === action.payload )
                ? {...item, done: !item.done}
                : item
            ));
        case 'checked':
            return state.map( item => (
                ( item.id === action.payload )
                ? {...item, checked: !item.checked}
                : item
            )); 
        default:
            return  state;
    }
}

export {
    toDoReducer
}
