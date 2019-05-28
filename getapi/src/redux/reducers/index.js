import { combineReducers } from 'redux'
import reducerNews from './reducerList'

export default combineReducers({
    new: reducerNews
})