import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DataBlog, DataResponseBlog } from './class/class-developer-blog';
import { IDeveloperAdmin } from './interface/admin-developer';

@Injectable({
  providedIn: 'root'
})
export class DeveloperAdminService {
  

  private headers = new HttpHeaders().set('content-type', 'application/json')
                                    .set('Access-Control-Allow-Origin', '*')
                                    .set('Authorization' , localStorage.getItem('tokenType')  +  ' ' +localStorage.getItem('tokenAcces') );
  constructor(private http: HttpClient) { }

  getDevelopersBlogList(): Observable<DataResponseBlog>{

 

    return this.http.get<DataResponseBlog>(`${environment.BASEURL}${environment.WEB_DEVELOPER.GET_LIST}`, {'headers': this.headers})
      .pipe( 
        map(
          (res:DataResponseBlog) => {
            return res
          }
        )
      );
  }

  saveData(data: IDeveloperAdmin): Observable<DataBlog>{
    const headers = new HttpHeaders().
    set('tokenType', localStorage.getItem('tokenType') || '')
    const body: IDeveloperAdmin = {
      content: data.content,
      description: data.description,
      title: data.title
    }
    return this.http.post<DataBlog>(`${environment.BASEURL}${environment.WEB_DEVELOPER.INSERT}`, body, {'headers': this.headers})
      .pipe( 
        map(
          (res:DataBlog) => {
            return res
          }
        )
      );
  }

  updateData(data: IDeveloperAdmin): Observable<DataBlog> {
    const body: IDeveloperAdmin = {
      content: data.content,
      description: data.description,
      title: data.title
    }
    return this.http.put<DataBlog>(`${environment.BASEURL}${environment.WEB_DEVELOPER.UPDATE}${data.id}`, body, {'headers': this.headers}).pipe(
      (res: any) => {
        console.log(res)
        return res;
      }
    )
  }

  getById(id: number): Observable<DataBlog> {
    return this.http.get<DataBlog>(`${environment.BASEURL}${environment.WEB_DEVELOPER.GET}${id}`, {'headers': this.headers})
      .pipe( 
        map(
          (res:DataBlog) => {
            return res
          }
        )
      );
  }

  deleteId(id: number){
    return this.http.delete<any>(`${environment.BASEURL}${environment.WEB_DEVELOPER.DELETE}${id}`, {'headers': this.headers});
      
  }
 
  saveImgHeader(multipartFile: File, id: any) {
    let formdata = new FormData();
    formdata.append('file', multipartFile);
    return this.http.post<any>(`${environment.BASEURL}${environment.WEB_DEVELOPER.SAVE_IMAGEN_HEADER}${id}`,formdata)
  }

  saveImgBody(multipartFile: File, id: any) {
    let formdata = new FormData();
    formdata.append('file', multipartFile);
    return this.http.post<any>(`${environment.BASEURL}${environment.WEB_DEVELOPER.SAVE_IMAGEN_BODY}${id}`, formdata)
  }
  
}
