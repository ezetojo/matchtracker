// src/firebase/firestore/addMatch.js
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore();

export const addMatch = async (matchData) => {
  try {
    const docRef = await addDoc(collection(db, "matches"), matchData);
    console.log("Match added with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding match:", error);
  }
};
