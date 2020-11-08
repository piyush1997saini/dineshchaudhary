import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private http: HttpClient) { }


cerateUser(data){
  return this.http.post('http://127.0.0.1:100/api/v1/users', data);
}

}
