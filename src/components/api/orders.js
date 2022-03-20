import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function getOrders() {
    return new Promise(async (resolve, reject) => {
  
      const orderCollection = collection(db, "orders");
  
      getDocs(orderCollection).then(snapshot => {      
        const order =  snapshot.docs.map( (doc) =>  ({ id: doc.id, ...doc.data() }));
      }).catch(error => {
        console.log(error);
        reject(error);
      })
  
    }, []);

  }
  export {
    getOrders,
  }