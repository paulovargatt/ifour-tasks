import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {AuthOptions, AuthTypes, User} from './auth.types';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    authState$: Observable<firebase.User>;

    constructor(private afauth: AngularFireAuth) {
        this.authState$ = this.afauth.authState;
    }

    get isAuthenticated(): Observable<boolean> {
        return this.authState$.pipe(map(user => user != null));
    }

    authenticate({isSignin, provider, user}: AuthOptions): Promise<auth.UserCredential> {
        let operation;
        if (provider !== AuthTypes.Email) {
            operation = this.signinWithPopup(provider);
        } else {
            operation = isSignin ? this.signin(user) : this.signup(user);
        }
        return operation;
    }

    logout() {
        return this.afauth.auth.signOut();
    }

    private signin({email, password}: User) {
        return this.afauth.auth.signInWithEmailAndPassword(email, password);
    }

    private signup({email, password, name}: User) {
        return this.afauth.auth.createUserWithEmailAndPassword(email, password).then((credentials) => {
            credentials.user.updateProfile({displayName: name, photoURL: null})
                .then(() => credentials);
        });
    }

    private signinWithPopup(provider: AuthTypes) {
        let signInProvider = null;
        switch (provider) {
            case AuthTypes.Facebook:
                signInProvider = new auth.FacebookAuthProvider();
                break;
        }

        return this.afauth.auth.signInWithPopup(signInProvider);
    }
}
