import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getItemSaga() {
    try{
        const getResponse = axios.get('/api/shelf');
        yield put({type: 'SET_ITEM', payload: getResponse})
    }
    catch (error){
        console.log(error); 
    }
}

function* getItem() {
    yield takeLatest('GET_ITEMS', getItemSaga)
}

export default getItem;