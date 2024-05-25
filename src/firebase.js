
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
    addDoc,
    collection,
    getFirestore
} from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyD91TLGMyFjCcNXlJCPL1yBZJcNhsCweA0",
    authDomain: "netflix-clone-badf3.firebaseapp.com",
    projectId: "netflix-clone-badf3",
    storageBucket: "netflix-clone-badf3.appspot.com",
    messagingSenderId: "1091039836593",
    appId: "1:1091039836593:web:fa69b41f773d7a41836590",
    measurementId: "G-BT49MGRHHL"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {

        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name: name,
            email: email,
            authProvider: "local"
        });

    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }

}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)

    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }

}

const logout = () => {
    signOut(auth);
}

export { auth, db, login, logout, signup }