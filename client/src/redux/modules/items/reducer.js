const GET_ITEMS = 'GET_ITEMS';

export const getItems = (itemsNormalized) => ({
  type: GET_ITEMS,
  itemsNormalized
});

const initialState = {
  itemsNormalized:[]
}

export const itemReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_ITEMS:
      return {
        ...state,
        itemsNormalized: action.itemsNormalized
      }
    default:
      return state;
  }
}