import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = 'assets/send.php';
  constructor( private http: HttpClient ) { }

  sendPostRequest( data: FormData ): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
