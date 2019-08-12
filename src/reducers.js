// Constants
export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

const initialState = {
    searchFeild: ''
}

// Reducer
export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case: CHANGE_SEARCH_FIELD:
          return Object.assign({}, state, {searchField: action.payload})
        default:
          return state;
    }
}
