import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDue38wzIQOMwCsnTKQKzFFs1lIEJ74KgY",
  authDomain: "ecoveda-ebcf3.firebaseapp.com",
  projectId: "ecoveda-ebcf3",
  storageBucket: "ecoveda-ebcf3.firebasestorage.app",
  messagingSenderId: "147387347416",
  appId: "1:147387347416:web:cb0a6d44962943023b42ad"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testFetch() {
  try {
    console.log("Fetching leads...");
    const querySnapshot = await getDocs(collection(db, "leads"));
    console.log(`Found ${querySnapshot.size} documents in 'leads' collection.`);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error fetching documents: ", error);
  }
}

testFetch();
