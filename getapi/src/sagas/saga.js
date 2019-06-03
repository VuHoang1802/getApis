import { getListStory, getDetailStory } from './../api/storyApi';
import {takeEvery, put, call, all} from 'redux-saga/effects'
import {FETCH_DATA, PREV_PAGE,FETCH_DATA_SUCCESED, FETCH_INIT_DATA_SUCCESSED, MOVE_PAGE, NEXT_PAGE, CHANGE_URL} from './../redux/types'

export var listNewIdTemp = []
function* getInitAPI(){
    try {
        const listNewId = yield call (getListStory, 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
        listNewIdTemp = listNewId;
        const totalPage = listNewId.length/10;
        yield put({type: FETCH_INIT_DATA_SUCCESSED, listNewId, totalPage})
        const listId = listNewId.slice(0, 10);
        yield call (fetchDataDetailStory, listId)
    } catch (e) {
        console.log(e);
    }
}


function* fetchDataDetailStory ( listId = []){
    const listNewDetail = yield call (getDetailStory, listId);
    yield put({type: FETCH_DATA_SUCCESED, listNewDetail});
}

function* getIndexPage(action){
    const start = Math.abs((action.index - 1))* 10;
    const end = start + 10;
    const listId = listNewIdTemp.slice(start, end);
    yield call (fetchDataDetailStory, listId);
}

function* getPrevPage(action){
    const start = Math.abs((action.indexPage - 1))* 10;
    const end = start + 10;
    const listId = listNewIdTemp.slice(start, end);
    yield call (fetchDataDetailStory, listId);
}
function* getNextPage(action){
    const start = Math.abs((action.indexPage - 1))* 10;
    const end = start + 10;
    const listId = listNewIdTemp.slice(start, end);
    yield call (fetchDataDetailStory, listId);
}
function* getChangList(action){
    try {
        const listNewId = yield call (getListStory, action.url);
        listNewIdTemp = listNewId;
        const totalPage = listNewId.length/10;
        yield put({type: FETCH_INIT_DATA_SUCCESSED, listNewId, totalPage})
        const listId = listNewId.slice(0, 10);
        yield call (fetchDataDetailStory, listId)
    } catch (e) {
        console.log(e);
    }
}

export default function* getAPIs(){
    yield all([
        yield takeEvery( FETCH_DATA , getInitAPI),
        yield takeEvery( MOVE_PAGE , getIndexPage),
        yield takeEvery( PREV_PAGE , getPrevPage),
        yield takeEvery( NEXT_PAGE , getNextPage),
        yield takeEvery( CHANGE_URL , getChangList)
    ])
}