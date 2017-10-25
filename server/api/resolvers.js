import fetch from 'node-fetch';
import { getItem, getUsers, getUser, getUserOwnedItem, getUserBorrowedItem, addCardItemHelper } from './jsonHelpers';
import { database } from '../index.js';

const resolveFunctions = {
  Query: {
    items() {
      return database.getItems();
    },
    item(root, { id }, context) {
      // return getItem(id);
      return context.loaders.Item.load(id);
    },
    users() {
      return getUsers();
    },
    user(root, { id }, context) {
      // return getUser(id);
      return context.loaders.User.load(id);
    },
    tags(){
      return database.getTags();
    }
  },
  User: {
    items(user, args, context){
      if(!user.id) return null;
      // return getUserOwnedItem(user.id);
      return context.loaders.UserOwnedItems.load(user.id);
    },
    borroweditems(user, args, context){
      if(!user.id) return null;
      // return getUserBorrowedItem(user.id);
      return context.loaders.UserBorrowedItems.load(user.id);
    }
  },
  Item: {
    itemowner(item, args, context){
      if (!item.itemowner) return null;
      // return getUser(item.itemowner);
      return context.loaders.User.load(item.itemowner);
    },
    borrower(item, args, context){
      if (!item.borrower) return null;
      // return getUser(item.borrower);
      return context.loaders.User.load(item.borrower);
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
