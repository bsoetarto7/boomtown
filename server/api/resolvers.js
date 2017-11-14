import fetch from 'node-fetch';
import { addCardItemHelper } from './jsonHelpers';
import { database } from '../index.js';
import { getUsers, getUser } from './firebaseHelpers';

const resolveFunctions = {
  Query: {
    items() {
      return database.getItems();
    },
    item(root, { id }, context) {
      return context.loaders.Item.load(id);
    },
    users() {
      return getUsers();
    },
    user(root, { id }, context) {
      return getUser(id);
    },
    tags(root, { id }){
      return database.getTags();
    }
  },
  User: {
    items(user, args, context){
      if(!user.id) return null;
      return database.getUserOwnedItems(user.id);
    },
    borroweditems(user, args, context){
      if(!user.id) return null;
      return database.getUserBorrowedItems(user.id);
    }
  },
  Item: {
    itemowner(item, args, context){
      if (!item.itemowner) return null;
      return getUser(item.itemowner);
    },
    borrower(item, args, context){
      if (!item.borrower) return null;
      return getUser(item.borrower);
    },
    tags(item, args){
      return database.getTag(item.id);
    }
  },
  Mutation:{
    addCardItem(root, args) {
      return addCardItemHelper(args.title, args.description, args.imageurl, args.tags, args.itemowner);
    }
  }
};

export default resolveFunctions;
