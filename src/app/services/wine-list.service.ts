import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WineListService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44372/api/Wine/wine';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  public getAll() {
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

}
