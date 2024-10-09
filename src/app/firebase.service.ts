import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
@Injectable()
export class FirebaseService {
private firebaseConfig = {
  apiKey: "AIzaSyATgYTpnn2XRHcvSImTVHBJWdAnTjsRh14",
  authDomain: "listado-personas-37f30.firebaseapp.com",
  databaseURL: "https://listado-personas-37f30-default-rtdb.firebaseio.com",
  projectId: "listado-personas-37f30",
  storageBucket: "listado-personas-37f30.appspot.com",
  messagingSenderId: "1046229229008",
  appId: "1:1046229229008:web:fef2afcd82d9e7201e2dd5"
};
public auth: Auth;
public db: Firestore;
constructor() {
const app = initializeApp(this.firebaseConfig);
this.auth = getAuth(app);
this.db = getFirestore(app);
}
}
