import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDcZW9GDKz_AbDVrgy3CVURSAb0Mkb6YO8',
  authDomain: 'gpt-chat-app-f2d6d.firebaseapp.com',
  projectId: 'gpt-chat-app-f2d6d',
  storageBucket: 'gpt-chat-app-f2d6d.appspot.com',
  messagingSenderId: '928780904026',
  appId: '1:928780904026:web:05cbd00d3ad34249755a63',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
