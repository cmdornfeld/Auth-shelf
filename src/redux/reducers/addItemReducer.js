const addItem = (state=[], action)=>{
    if(action.type === `NEW_ITEM`){
        return action.payload;
    }
    return state;
}


export default addItem;