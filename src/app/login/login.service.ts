import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseService } from '../firebase.service';

@Injectable()
export class LoginService {
  token: string | null;

  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) {}
  login(email: string, password: string) {
    const auth = this.firebaseService.auth;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        auth.currentUser?.getIdToken().then((token) => {
          this.token = token;
          this.router.navigate(['/']);
          console.log('Login con exito');
        });
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
      });
  }
  getIdToken() {
    return this.token;
  }

  isAutenticado() {
    return this.token != null;
  }

  logout(){
    const auth = this.firebaseService.auth;
    auth.signOut()
    .then(() => {
    this.token = null;
    this.router.navigate(['login']);
    }).catch(error => console.log("error logout: " + error));
    }
    
}
