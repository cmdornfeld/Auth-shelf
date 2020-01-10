import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getItemSaga() {
    try{
        const getResponse = yield axios.get('/api/shelf');
        yield put({type: 'SET_ITEM', payload: getResponse.data})
    }
    catch (error){
        console.log(error); 
    }
}

function* getItem() {
    yield takeLatest('GET_ITEMS', getItemSaga)
}

export default getItem;