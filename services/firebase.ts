// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAr3JEMvk7EK4a-_6ITbTjDaJzWOD6FolQ',
    authDomain: 'content-buddy--auth.firebaseapp.com',
    projectId: 'content-buddy--auth',
    storageBucket: 'content-buddy--auth.appspot.com',
    messagingSenderId: '293484392525',
    appId: '1:293484392525:web:6bef429eec1d5103756c04',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth: Auth = getAuth(app)
