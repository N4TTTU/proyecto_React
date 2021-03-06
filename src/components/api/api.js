import { getDocs, collection } from 'firebase/firestore';
import { db } from "../../firebase";

function getItems() {
    return new Promise(async (resolve, reject) => {
  
      const itemsCollection = collection(db, "items");
  
      getDocs(itemsCollection).then(snapshot => {      
        const products =  snapshot.docs.map( (doc) =>  ({ id: doc.id, ...doc.data() }))

        resolve(products)
      }).catch(error => {
        console.log(error);
        reject(error);
      })
  
    });
  }
  export {
    getItems,
  }