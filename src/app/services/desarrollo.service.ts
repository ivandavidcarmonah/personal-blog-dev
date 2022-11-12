import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { DataResponseBlog } from '../components/class/class-developer-blog';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DesarrolloService {

  constructor(private http: HttpClient) { }


  getDesarrollos(): Observable<any>{
    return this.http.get('http://localhost:8080/api/publication/list-publications');
  }

  getDevelopersBlogList(): Observable<DataResponseBlog>{
    return this.http.get<DataResponseBlog>('http://localhost:8080/api/developer-blog/list')
      .pipe( 
        map(
          (res:DataResponseBlog) => {
            return res
          }
        )
      );
  }


}
