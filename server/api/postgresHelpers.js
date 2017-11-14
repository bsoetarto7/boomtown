import { Pool } from 'pg';

export default function(app){

  const pgClient = new Pool({
    host: app.get('PG_HOST'),
    user: app.get('PG_USER'),
    password: app.get('PG_PASSWORD'),
    database: app.get('PG_DATABASE'),
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  })
  
  return {
    getOneItem(id){
      return pgClient.query(`SELECT * FROM items WHERE id='${id}'`).then(res => (res.rows));
    },
    getItems(){
      return pgClient.query("SELECT * FROM items").then(res => (res.rows));
    },
    getTags(){
      return pgClient.query("SELECT * FROM tags").then(res => (res.rows));
    },
    getTag(id){
      return pgClient.query(`SELECT tags.id, tags.tagname FROM tags JOIN itemtags on tags.id = itemtags.tagid WHERE itemtags.itemid = ${id}`).then(res => res.rows);
    },
    getUserBorrowedItems(id){
      return pgClient.query(`SELECT * FROM items WHERE borrower='${id}'`).then(res => (res.rows));
    },
    getUserOwnedItems(id){
      return pgClient.query(`SELECT * FROM items WHERE itemowner='${id}'`).then(res => res.rows);
    }
  };
  
}