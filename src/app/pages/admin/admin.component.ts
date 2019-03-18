import { Component, OnInit } from '@angular/core';
import { ApiInstagramService } from '../../core/api/api-instagram.service';
import { Account } from '../../core/models/account';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  account: Account;

  constructor(
    private apiInstagram: ApiInstagramService
  ) { }

  ngOnInit() {
    this.apiInstagram.getPlaceByUsername('centralcoffeekh').subscribe(data => {
      console.log(data);
      console.log(data.business_discovery.media);
      this.account = data.business_discovery;
    }, error => {
      console.log(error);
    });
  }

  onSearch(username: string) {
    this.apiInstagram.getPlaceByUsername(username).subscribe(data => {
      console.log(data);
      console.log(data.business_discovery.media);
      this.account = data.business_discovery;
    }, error => {
      console.log(error);
    });
  }

}
