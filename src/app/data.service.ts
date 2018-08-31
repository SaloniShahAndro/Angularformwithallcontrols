import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(data) {
    // return this.http.get('https://jsonplaceholder.typicode.com/users');
    var body = JSON.stringify(data)

    return this.http.post('http://localhost:4555/add', body, httpOptions)
  }



}
