import DataLoader from 'dataloader';
import { getUser } from './firebaseHelpers';
import { database } from '../index.js';

export default function() {
  return {
    UserOwnedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => database.getUserOwnedItems(id))
    ))),
    Item: new DataLoader(ids => (
      Promise.all(ids.map(id => database.getOneItem(id))
    ))),
    User: new DataLoader(ids => (
      Promise.all(ids.map(id => getUser(id))
    ))),
    UserBorrowedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => database.getUserBorrowedItems(id))
    )))
  }
};