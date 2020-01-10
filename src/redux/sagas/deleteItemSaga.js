import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteItemSaga(action){
    try{
        yield axios.delete(`/api/shelf/` + action.payload);
        yield put({type: 'GET_ITEMS'})
    } catch (error){
        console.log(error)
    }
}

function* deleteItem() {
    yield takeLatest('DELETE_ITEM', deleteItemSaga);
  }

export default deleteItem;