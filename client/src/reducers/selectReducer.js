const initialState = {
  dropdownList:[
    {id:1, name:'Electronics'},
    {id:2, name:'Household Items'},
    {id:3, name:'Musical Instruments'},
    {id:4, name:'Physical Media'},
    {id:5, name:'Recreational Equipment'},
    {id:6, name:'Sporting Goods'},
    {id:7, name:'Tools'}
  ],
  filtereditems: []
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'GET_SELECT_ITEMS':
      return state
    case 'SET_FILTER_ITEMS':
      return{
        ...state,
        filtereditems:action.filteredItems
      }
    default:
      return state
  }
}