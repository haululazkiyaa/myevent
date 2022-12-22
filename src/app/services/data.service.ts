import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://iwewo-dcc43-default-rtdb.asia-southeast1.firebasedatabase.app/data';
  
  constructor(private httpClient: HttpClient) { }
  
  getData(){
    return this.httpClient.get(this.url + ".json");
  }
  
}
