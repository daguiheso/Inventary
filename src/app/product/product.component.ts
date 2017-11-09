import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const queryProducts = gql`
  query queryProducts {
    categories {
      id
    name
    typeCategory
    created
    updated
    }
  }
`;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {

  loading: boolean;
  currentUser: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.watchQuery<any>({
      query: queryProducts
    })
      .valueChanges
      .subscribe(({ data }) => {
        this.loading = data.loading;
        this.currentUser = data.currentUser;
      });
  }

}
