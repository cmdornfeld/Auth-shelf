const getItem = (state=[], action)=>{
    if(action.type === `SET_ITEM`){
        console.log('GET ITEM REDUCER', action.payload);
        return action.payload;
    }
    return state;
}

export default getItem;