import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl='http://192.168.29.91:5000/api/v1';

  constructor(
    public http:HttpClient
  ) { }

  get(url:any)
  {
    return this.http.get(this.serverUrl + url);
  }

  post(url:any,data:any)
  {
    return this.http.post(this.serverUrl+url,data);
  }

  put(url:any, data:any)
  {
    return this.http.put(this.serverUrl+url, data);
  }

  delete(url:any)
  {
    return this.http.delete(this.serverUrl+url);
  }
}
