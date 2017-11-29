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
    },
    addCardItemHelper(title, description, imageurl, itemowner, tags){
      pgClient.query(`INSERT INTO items (title, description, imageurl, itemowner) VALUES ('${title}', '${description}', '${imageurl}', '${itemowner}') RETURNING id`)
              .then(res => {
                const sqlValues = tags.reduce((acc, curr, index, array) => {
                  if(index < array.length-1) {
                    acc = (`${acc}('${res.rows[0].id}', '${curr}'),`)
                  }else{
                    acc = (`${acc}(${res.rows[0].id}, ${curr})`)
                  }
                  return acc
                 },'');
                pgClient.query(`INSERT INTO itemtags (itemid, tagid) VALUES ${sqlValues}`)
              });
    }
  };
  
}