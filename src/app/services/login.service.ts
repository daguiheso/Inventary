import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()

export class LoginService {

	constructor(public afAuth: AngularFireAuth) {

	}

	public login(user) {
		console.log(user)
		this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)

	}
}
