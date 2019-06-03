
import { FETCH_DATA, PREV_PAGE, MOVE_PAGE, IS_FETCHING, NEXT_PAGE, DELETE_LIST, FETCH_DATA_SUCCESED, FETCH_INIT_DATA_SUCCESSED } from '../types';


export const initState = {
    isFetching: false,
    listNewId: [],
    listNewDetail: [],
    totalPage: 0,
    indexPage: 0,
}

export const reducerNews = (state = initState, action) => {
    switch (action.type) {
        case DELETE_LIST:
        // state.startPage = action.MovePage;
        // console.log(action.MovePage);
        // var Delete = [];
        // return {...state, listNewDetail:Delete};
        case MOVE_PAGE:
            return { ...state, indexPage: action.index };
        case PREV_PAGE:
            return { ...state, indexPage: action.indexPage };
        case NEXT_PAGE:
            return { ...state, indexPage: action.indexPage };
        case FETCH_DATA:
            return { ...state, listNewId: action.listId, isFetching: true };
        case FETCH_INIT_DATA_SUCCESSED:
            return { ...state, listNewId: action.listNewId, totalPage: action.totalPage }
        case FETCH_DATA_SUCCESED:
            return { ...state, listNewDetail: action.listNewDetail };
        default:
            return state
    }
}

export default reducerNews
