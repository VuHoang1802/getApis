import { FETCH_DATA, PREV_PAGE , IS_FETCHING, NEXT_PAGE, CHANGE_URL, MOVE_PAGE } from '../types';
// export const showNewFeed = () => ({
//      type: SHOW_LIST,
// })
export function LoadPage(index) {
    return {
        type: MOVE_PAGE, 
        index,
    }
}
export function MoveToPage(prevOrNext,indexPage) {
    if(!prevOrNext && indexPage >= 0){
        console.log(prevOrNext,indexPage);
        return {
            type: PREV_PAGE, 
            indexPage,
        }
    }
    else if(prevOrNext && indexPage <= 50){
        console.log(prevOrNext,indexPage);
        return {
            type: NEXT_PAGE, 
            indexPage,
        }
    }
    else if(indexPage < 0 || indexPage > 50){
        alert("thao tác sai");
        indexPage = 0;
        return {
            type: NEXT_PAGE, 
            indexPage,
        }
    }
}
export function fetchData() {
    return {
        type: FETCH_DATA,
}
}

export function pastList(url){
    return {
        type: CHANGE_URL, 
        url
    }
}
