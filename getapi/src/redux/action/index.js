
import { FETCH_DATA, SHOW_LIST, IS_FETCHING, NEXT_PAGE, DELETE_LIST } from '../types';
import { getListStory, getDetailStory } from '../../api/storyApi';
export const showNewFeed = () => ({
    type: SHOW_LIST,
})
// export const LoadPage = (index) =>(
//     {
//     type: 'NEXT_PAGE',
//     index,
//     }
// )
export function LoadPage(dispatch, index, MovePage) {
    console.log(index);
    const start = index * 10;
    const end = start + 10;
    return new Promise(async (resolve, reject) => {
        let listNewId = await getListStory();

        dispatch({ type: NEXT_PAGE, listNewId, start })
        dispatch({ type: DELETE_LIST, listNewId })
        const listId = listNewId.slice(start, end);
        console.log(listId);
        fetchDataDetailStory(dispatch, listId)
    })
}
export function MoveToPage(dispatch, isChange, MovePage) {
    
}
export function fetchData(dispatch) {
    return new Promise(async (resolve, reject) => {
        dispatch({ type: IS_FETCHING });
        const listNewId = await getListStory();
        dispatch({ type: FETCH_DATA, listNewId })
        const listId = listNewId.slice(0, 10)
        fetchDataDetailStory(dispatch, listId)
    })
}

export function fetchDataDetailStory(dispatch, listId = []) {
    return new Promise(async resolve => {
        let listNewDetail = []
        for (const id of listId) {
            const newDetail = await getDetailStory(id);
            listNewDetail.push(newDetail)
        }
        dispatch({ type: SHOW_LIST, listNewDetail })
    })

}
