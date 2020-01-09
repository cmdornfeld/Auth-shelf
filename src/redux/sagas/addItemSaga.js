import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addItemSaga(action){
    try{
        const newItem = axios.post(`/api/shelf`, action.payload);
        yield put({type: 'NEW_ITEM', payload: newItem})
    } catch (error){
        console.log(error)
    }
}

function* addItem() {
    yield takeLatest('ADD_ITEM', addItemSaga);
  }

export default addItem;