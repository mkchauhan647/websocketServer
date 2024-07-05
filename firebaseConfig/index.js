// import { GoogleAuthProvider, signInWithEmailAndPassword,signOut,signInWithPopup, onAuthStateChanged } from 'firebase/auth';
const {GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged} = require('firebase/auth');
// import { db, auth, storage } from './firebaseConfig';
const { db, auth, storage } = require('./firebaseConfig');

const signInWithEmail= async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        return user;
    } catch (error) {
        return error;
    }
}

const signUpWithEmail = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        return user;
    } catch (error) {
        return error;
    }
}

const logOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        return error;
    }
}


const signInWithPop = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
        console.log(user);
        return user;
    } catch (error) {
        return error;
    }
}

const checkUser = async () => {
    try {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                return user;
            } else {
                return null;
            }
        });
        // return user;
    } catch (error) {
        return error;
    }
}

// export { signInWithEmail, signUpWithEmail, logOut, signInWithPop };
module.exports = {signInWithEmail, signUpWithEmail, logOut, signInWithPop, checkUser};