import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()

export class AuthService {

	constructor(public afAuth: AngularFireAuth) {

	}

	public login(user) {
		console.log(user)
		this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then( a => {
			debugger
		}).catch(error => {
			debugger
		});
	}

	public save(user) {
		console.log(user)
		this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then( a => {
			debugger
		}).catch(error => {
			debugger
		});
	}
}
