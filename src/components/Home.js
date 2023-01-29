import { auth, getFirestore,collection,  addDoc, getDocs, onSnapshot,doc, deleteDoc,getDoc, orderBy, query, updateDoc, Timestamp, updateProfile, arrayUnion, arrayRemove} from "../firebase/index.js";

const db = getFirestore();

// export const saveDatas = (post) => addDoc(collection(db, 'post'), {post});
export const saveDatasUser = (name,email,uid) => addDoc(collection(db, 'usuarios'), {name,email,uid});

export const saveDatasPost = (post) => addDoc(collection(db, 'post'), {
  user: auth.currentUser.displayName,
  uid: auth.currentUser.uid,
  date: Timestamp.fromDate(new Date()),
  post: post,
  likes: 0,
  likesUser: []
});

export const getDatasPost = () => getDocs(collection(db, 'post'));

export const getDatasUser = () => getDocs(collection(db, 'usuarios'));

export const getOnDatas = (callback) => {
    const orderQuery = query(collection(db,'post'),orderBy("date","desc"));
    onSnapshot(orderQuery,(callback))};

export const addLike = (id, like, uid) => updateDoc(doc(db, 'post', id), {
  likes: like,
  likesUser: arrayUnion(uid)
})

export const removeLike = (id, like, uid) => updateDoc(doc(db, 'post', id), {
  likes: like,
  likesUser: arrayRemove(uid)
})

export const deleteData = (id) => deleteDoc(doc(db, "post", id));

export const getData = (id) => getDoc(doc(db, "post", id));

export const updateData = (id, newFields) => updateDoc(doc(db, "post", id), newFields);


    
