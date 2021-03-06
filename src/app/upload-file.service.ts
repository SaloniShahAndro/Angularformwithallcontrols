import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent,} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  constructor(private http: HttpClient) {}
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('profilepic', file);
    const req = new HttpRequest('POST', 'http://localhost:4555/profilepic', formdata, {
     // reportProgress: true,
     // responseType: 'text'
    }
    );
    return this.http.request(req);
  }
}
