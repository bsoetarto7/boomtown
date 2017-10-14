export const fetchAllItemsData = () => {
  const urls = ['http://localhost:3001/items','http://localhost:3001/users']; 
  return Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
  )).then(data => {
    const [items, users] = data;
    const cardData = items.map(item =>{
      return {
        ...item,
        user: users.find(user => user.id === item.itemOwner)
      }
    })
    return cardData;
  })
}