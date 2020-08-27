import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wine } from '../models/wine';

@Injectable()
export class WineListService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44372/api/Wine';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  public getAllWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.accessPointUrl);
  }

  public getWineById(Id: number): Observable<Wine>{
    return this.http.get<Wine>(this.accessPointUrl+'/'+Id);
  }

  public createWine(wine: Wine): Observable<Wine> {
    return this.http.post<Wine>(this.accessPointUrl, wine, {headers: this.headers});
  }

  public deleteWine(Id: number): Observable<number>{
    return this.http.delete<number>(this.accessPointUrl+'/'+Id, {headers: this.headers} );
  }

  public updateWine(wine: Wine): Observable<Wine>{
    return this.http.put<Wine>(this.accessPointUrl, wine, {headers: this.headers} );
  }
}
