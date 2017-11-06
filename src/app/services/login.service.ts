import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from "angularfire2/database";

@Injectable()

export class LoginService {

	// constructor(private afDB: AngularFireDatabase) {

	// }

	public login(user) {
		console.log(user)
		// this.afDB.database.ref('places/1').set(user);
	}
}
