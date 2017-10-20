import fetch from 'node-fetch';
import { getItems, getItem, getUsers, getUser, getUserOwnedItem, getUserBorrowedItem, addCardItemHelper } from './jsonHelpers';

const resolveFunctions = {
  Query: {
    items() {
      return getItems();
    },
    item(root, { id }) {
      return getItem(id);
    },
    users() {
      return getUsers();
    },
    user(root, { id }) {
      return getUser(id);
    }
  },
  User: {
    items(user){
      if(!user.id) return null;
      return getUserOwnedItem(user.id);
    },
    borroweditems(user){
      if(!user.id) return null;
      return getUserBorrowedItem(user.id);
    }
  },
  Item: {
    itemowner(item){
      if (!item.itemowner) return null;
      return getUser(item.itemowner);
    },
    borrower(item){
      if (!item.borrower) return null;
      return getUser(item.borrower);
    }
  },
  Mutation:{
    addCardItem(root, args) {
      return addCardItemHelper(args.title, args.description, args.imageurl, args.tags, args.itemowner);
    }
  }
};

export default resolveFunctions;
