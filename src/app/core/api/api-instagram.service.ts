import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Account } from '../models/account';
import { BusinessDiscovery } from '../models/business_discovery';

@Injectable({
  providedIn: 'root'
})
export class ApiInstagramService {

  testAccessToken = 'EAACEdEose0cBADYl4FYm9xr17XPDEmY9FB1ZC8cWTW6yJiJMorp7pdKlGgYL3VZChHxYZBzb1sZAAZBqZBZAOjZB0qhVbLvpfc0rFN1ZCyHv7UGzm4QaRFTHfI5OP473SJnYOmpYvNb5yh0TB3D6xPcXMNv3OQy2cFA4kkm7KKCRtdcek0CtzbmimIiE1mX1lGjN8L5yxNo5ntQZDZD';
  testBusinessId = '17841400185574731';
  baseUrl = 'https://graph.facebook.com/v3.0' + '/' + this.testBusinessId;
  accountParams = 'biography,followers_count,follows_count,id,media_count,name,profile_picture_url,username,website,mentioned_media,media';

  params: HttpParams;

  constructor(
    private httpClient: HttpClient
  ) {
    this.params = new HttpParams().set('access_token', this.testAccessToken);
  }

  getPlaceByUsername(username: string): Observable<BusinessDiscovery> {
    return this.httpClient.get<BusinessDiscovery>(`${this.baseUrl}?fields=business_discovery.username(${username}){biography,followers_count,follows_count,id,media_count,name,profile_picture_url,username,website,media}`,
      {params: this.params});
  }
}
