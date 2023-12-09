import { db } from "../firebase/index";
import { collection,addDoc,doc,deleteDoc } from "firebase/firestore";

const addTodo = async({userId, title, description}) => {
    try {
     await addDoc(collection(db, "todo"), {
        user: userId,
        title: title,
        description: description,
        createdAt: new Date().getTime(),
     })
    } catch (error) {
       console.log(error) 
    }  
}

const deleteTodo = async(docId) => {
    try {
      const todoRef = doc(db, "todo", docId);
      await deleteDoc(todoRef)
    } catch (error) {
        console.log(error)
    }
}

export {addTodo, deleteTodo}