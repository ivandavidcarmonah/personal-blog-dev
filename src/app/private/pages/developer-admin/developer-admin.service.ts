import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

 

    return this.http.get<DataResponseBlog>('http://localhost:8080/api/developer-blog/list', {'headers': this.headers})
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
    return this.http.post<DataBlog>('http://localhost:8080/api/developer-blog/new', body, {'headers': this.headers})
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
    return this.http.put<DataBlog>(`http://localhost:8080/api/developer-blog/update/${data.id}`, body, {'headers': this.headers}).pipe(
      (res: any) => {
        console.log(res)
        return res;
      }
    )
  }

  getById(id: number): Observable<DataBlog> {
    return this.http.get<DataBlog>(`http://localhost:8080/api/developer-blog/${id}`, {'headers': this.headers})
      .pipe( 
        map(
          (res:DataBlog) => {
            return res
          }
        )
      );
  }

  deleteId(id: number){
    return this.http.delete<any>(`http://localhost:8080/api/developer-blog/delete/${id}`, {'headers': this.headers});
      
  }
 
  saveImgHeader(multipartFile: File, id: any) {
    let formdata = new FormData();
    formdata.append('file', multipartFile);
    return this.http.post<any>(`http://localhost:8080/api/developer-blog/save-file/header/${id}`,formdata)
  }

  saveImgBody(multipartFile: File, id: any) {
    let formdata = new FormData();
    formdata.append('file', multipartFile);
    return this.http.post<any>(`http://localhost:8080/api/developer-blog/save-file/body/${id}`, formdata)
  }
  
}
