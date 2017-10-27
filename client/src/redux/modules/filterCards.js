export const setFilteredtItems = (filteredItems) => ({
  type: 'SET_FILTER_ITEMS',
  filteredItems
})

const initialState = {
  filtereditems: []
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'SET_FILTER_ITEMS':
      return{
        ...state,
        filtereditems:action.filteredItems
      }
    default:
      return state
  }
}