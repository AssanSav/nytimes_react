import * as types from './bookActionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case types.LOADBOOKS:
            return{
                ...state,
                books_past: action.books_past
            }
        case types.SHOW_BEST_SELLER_BOOK:
            return{
                ...state,
                book: action.bookShow
            }
        default: 
            return state
    }
}