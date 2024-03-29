import { db } from "../config";
import { collection, getDocs, query, where } from '@firebase/firestore';


export const getBreakfastRecipes = async () =>{
    const q = query(collection(db, "recipes"), where("category", "==", "breakfast"));
    const snap = await getDocs(q);
    const docs=[]
    snap.forEach( doc => {
        // console.log(doc.data());
        docs.push(doc.data())
    });
    return docs;
}

export const getRecipesByCategory = async(category) =>{
    const q = query(collection(db, "recipes"), where("category", "==", category));
    const snap = await getDocs(q);
    const docs=[]
    snap.forEach( doc => {
        // console.log(doc.data());
        docs.push(doc.data())
    });
    return docs;
}
export const getLatestRecipes = async()=>{
    const q = query(collection(db, "recipes"));
    const snap = await getDocs(q);
    const docs=[]
    snap.forEach( doc => {
        // console.log(doc.data());
        docs.push(doc.data())
    });
    return docs.slice(0, 3);
}
export const getRecipeByName = async(recipeName)=>{
    const q = query(collection(db, "recipes"), where("name", "==", recipeName));
    const snap = await getDocs(q);
    const docs=[]
    snap.forEach( doc => {
        // console.log(doc.data());
        docs.push(doc.data())
    });
    return docs? docs[0] : undefined;
}