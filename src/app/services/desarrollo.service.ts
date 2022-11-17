import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { DataResponseBlog } from '../components/class/class-developer-blog';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DesarrolloService {

  constructor(private http: HttpClient) { }


  getDesarrollos(): Observable<any>{
    return this.http.get(`${environment.BASEURL}${environment.WEB_DEVELOPER.GET_LIST}`);
  }

  getDevelopersBlogList(): Observable<DataResponseBlog>{
    return this.http.get<DataResponseBlog>(`${environment.BASEURL}${environment.WEB_DEVELOPER.GET_LIST}`)
      .pipe( 
        map(
          (res:DataResponseBlog) => {
            return res
          }
        )
      );
  }


}
