
import { getListStory, getDetailStory } from '../../api/storyApi';
import { FETCH_DATA, SHOW_LIST, IS_FETCHING, NEXT_PAGE } from '../types';

const initState = {
    isFetching:false,
    listNewId : [],
    listNewDetail: [],
    totalPage: 10,
    startPage: 0,
}


const reducerNews = (state = initState, action) => {
    switch (action.type) {
        case NEXT_PAGE:
            
            console.log(state.startPage);
            return {...state,startPage : action.index}
        case IS_FETCHING:
            return {...state, isFetching:true}
        case FETCH_DATA:
            return {...state, listNewId:action.listNewId};
        case SHOW_LIST:
            const totalPages = [...state.listNewId].length / 10;            
            const listNew = [...state.listNewDetail,...action.listNewDetail]
            return {...state, listNewDetail:listNew, totalPage: totalPages};
        default:
            return state
    }
}

export default reducerNews
