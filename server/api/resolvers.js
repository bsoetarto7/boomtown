import fetch from 'node-fetch';

const url = 'http://localhost:3001';

const resolveFunctions = {
  Query: {
    items() {
      return fetch(`${url}/items`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
    },
    item(root, { id }) {
      return fetch(`${url}/${id}`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
    },
    users() {
      return fetch(`${url}/users`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
    },
    user(root, { id }) {
      return fetch(`${url}/users/${id}`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
    }
  },
  User: {
    items(user){
      return fetch(`${url}/items/?itemowner=${user.id}`)
      .then(response => response.json())
      .catch(errors => console.log(errors));
    },
    borroweditems(user){
      return fetch(`${url}/items/?borrower=${user.id}`)
      .then(response => response.json())
      .catch(errors => console.log(errors));
    }
  },
  Item: {
    itemowner(item){
      return fetch(`${url}/users/${item.itemowner}`)
      .then(response => response.json())
      .catch(errors => console.log(errors));
    },
    borrower(item){
      if (!item.borrower) return null;
      return fetch(`${url}/users/${item.borrower}`)
      .then(response => response.json())
      .catch(errors => console.log(errors));
    }
  }
};

export default resolveFunctions;
