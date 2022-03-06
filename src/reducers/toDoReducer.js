
let init = [];
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
        case 'filter-all': 
            return state.map( item => (
                {...item, view: true}
            ));
        case 'filter-checked': 
            return state.map( item => (
                {...item, view: item.checked}
            ));
        case 'filter-done': 
            return state.map( item => (
                {...item, view: item.done}
            ));
        case 'clear': 
            return state.filter( item => !item.done);
        default:
            return  state;
    }
}

export {
    toDoReducer
}
