import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//  serverUrl='http://192.168.29.91:5000/api/v1';
serverUrl='http://localhost:8080/api/';

  constructor(
    public http:HttpClient
  ) { }

  get(baseUrl:any)
  {
    return this.http.get(this.serverUrl + baseUrl);
  }

  post(baseUrl:any,data:any)
  {
    return this.http.post(this.serverUrl+baseUrl,data);
  }

  put(baseUrl:any, data:any)
  {
    return this.http.put(this.serverUrl+baseUrl, data);
  }

  delete(baseUrl:any)
  {
    return this.http.delete(this.serverUrl+baseUrl);
  }

  getAll(params:any, baseUrl:any): Observable<any> {
    return this.http.get(this.serverUrl+baseUrl, { params });
  }

  get2(id:any, baseUrl:any): Observable<any> {
    return this.http.get(`${this.serverUrl+baseUrl}/${id}`);
  }

  create(data:any, baseUrl:any): Observable<any> {
    return this.http.post(this.serverUrl+baseUrl, data);
  }

  update(id:any, data:any, baseUrl:any): Observable<any> {
    return this.http.put(`${this.serverUrl+baseUrl}/${id}`, data);
  }

  delete2(id:any, baseUrl:any): Observable<any> {
    return this.http.delete(`${this.serverUrl+baseUrl}/${id}`);
  }

  deleteAll(baseUrl:any): Observable<any> {
    return this.http.delete(this.serverUrl+baseUrl);
  }
}
