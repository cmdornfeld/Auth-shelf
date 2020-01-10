const getItem = (state=[], action)=>{
    if(action.type === `SET_ITEM`){
        return action.payload;
    }
    return state;
}

export default getItem;