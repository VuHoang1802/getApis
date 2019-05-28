
import { FETCH_DATA, SHOW_LIST, IS_FETCHING, NEXT_PAGE } from '../types';
import { getListStory, getDetailStory } from '../../api/storyApi';

var totalPage = 40;
export const showNewFeed = () => ({
    type: SHOW_LIST,
})
export const LoadPage = (index) =>({
    type: 'NEXT_PAGE',
    index,
})
export function fetchData(dispatch) {
    return new Promise(async (resolve, reject) => {
        dispatch({ type: IS_FETCHING });
        const listNewId = await getListStory();
        dispatch({ type: FETCH_DATA, listNewId })
        
        const listId = listNewId.slice(totalPage,totalPage += 10)
        console.log(totalPage)
        fetchDataDetailStory(dispatch,listId)
    })
}

export function fetchDataDetailStory(dispatch, listId=[]){
    return new Promise(async resolve=>{
        let listNewDetail = []
        for (const id of listId) {
            const newDetail = await getDetailStory(id);
            listNewDetail.push(newDetail)
        }
        dispatch({type:SHOW_LIST,listNewDetail})
    })
   
}