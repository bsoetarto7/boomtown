import fetch from 'node-fetch';

const url = 'http://localhost:3001';

export const getItems = () => {
  return fetch(`${url}/items`)
  .then(response => response.json())
  .catch(errors => console.log(errors));
}

export const getItem = (id) => {
  return fetch(`${url}/items/${id}`)
  .then(response => response.json())
  .catch(errors => console.log(errors));
}

export const getUsers = () => {
  return fetch(`${url}/users`)
  .then(response => response.json())
  .catch(errors => console.log(errors));
}

export const getUser = (id) => {
  return fetch(`${url}/users/${id}`)
  .then(response => response.json())
  .catch(errors => console.log(errors));
}

export const getUserOwnedItem = (id) => {
  return fetch(`${url}/items/?itemowner=${id}`)
  .then(response => response.json())
  .catch(errors => console.log(errors));
}

export const getUserBorrowedItem = (id) => {
  return fetch(`${url}/items/?borrower=${id}`)
  .then(response => response.json())
  .catch(errors => console.log(errors));
}

export const addCardItemHelper = (title, description, imageurl, tags, itemowner) => {
  const tzOffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
  const localTime = `${(new Date(Date.now() - tzOffset)).toISOString().slice(0, -1).replace('T', ' ')}-07`;
  
  const newCardItem = {
    title: title,
    description: description,
    imageurl: imageurl,
    tags: tags,
    itemowner: itemowner,
    created: localTime,
    available: true,
    borrower: null
  }

  return fetch(`${url}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCardItem)
  })
  .then(resp => resp.json())
  .catch(error => console.log(error))
}

