const initialState = {
  users:[],
  items:[],
  errorMsg:{},
  isLoading:false,
  filteredItems:[]
}

const mergerUsersItems = (users,items) => {
  return users.map(user => {
    return{
      ...user,
      items: items.filter(item => item.itemOwner === user.id)
    }
  })
}

const mergerItemsUsers = (users,items) => {
  return items.map(item => {
    return{
      ...item,
      user: users.find(user => item.itemOwner === user.id)
    }
  })
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'GET_USERS_BEGIN':
    case 'GET_CARD_ITEMS_BEGIN':
      return {
        ...state,
        isLoading:true
      }
    case 'GET_USERS_SUCCESS':
      return {
        ...state
      }
    case 'GET_CARD_ITEMS_SUCCESS':
      return{
        ...state,
        isLoading:false,
        users: mergerUsersItems(action.users, action.items),
        items: mergerItemsUsers(action.users, action.items)
      }
    case 'GET_USERS_ERROR':
    case 'GET_CARD_ITEMS_ERROR':
      return {
        ...state,
        isLoading:false,
        errorMsg:action.error
      }
    default:
      return state;
  }
}