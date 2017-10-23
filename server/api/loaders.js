import DataLoader from 'dataloader';

import { getItem, getUser, getUserOwnedItems, getUserBorrowedItems } from './jsonHelpers';

export default function() {
  return {
    UserOwnedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getUserOwnedItems(id))
    ))),
    Item: new DataLoader(ids => (
      Promise.all(ids.map(id => getItem(id))
    ))),
    User: new DataLoader(ids => (
      Promise.all(ids.map(id => getUser(id))
    ))),
    UserBorrowedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getUserBorrowedItems(id))
    )))
  }
};