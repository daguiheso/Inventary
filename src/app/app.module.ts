import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from "./services/auth.service";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'create', component: CreateUserComponent },
  { path: 'product', component: ProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    CreateUserComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    ApolloModule
  ],
  providers: [
    AuthService,
    Apollo,
    HttpLink,
    HttpLinkModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      // By default, this client will send queries to the
      // `/graphql` endpoint on the same host
      link: httpLink.create({ uri: 'https://test-django-flex.appspot.com/graphql' }),
      cache: new InMemoryCache()
    });
  }
}
