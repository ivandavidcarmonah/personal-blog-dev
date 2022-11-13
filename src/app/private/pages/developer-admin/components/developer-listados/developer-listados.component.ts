import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeveloperAdminService } from '../../developer-admin.service';
import { DataBlog, DataResponseBlog } from '../../class/class-developer-blog';
import { faAward, faIdCard, faLaptopCode, faRobot } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-developer-listados',
  templateUrl: './developer-listados.component.html',
  styleUrls: ['./developer-listados.component.scss']
})
export class DeveloperListadosComponent implements OnInit {
  public dataBlog!: DataResponseBlog;
  public listData: DataBlog[] = [];

  // public faEdit: faEdit;
  constructor(private service: DeveloperAdminService, private router: Router) {
   }

  ngOnInit(): void {
    this.service.getDevelopersBlogList().subscribe((res:DataResponseBlog) => {
      console.log(res)
      this.listData = res.dataList;
    })
  }

  getEdit(id:number){
    this.router.navigate(['admin-site/developer-admin/edit', id], {queryParams: {insertar: false, id}});
  }
  
  nuevaEntrada(){
    this.router.navigate(['admin-site/developer-admin/new'], {queryParams: {insertar: true}} )
  }

  returnUrl(){
    this.router.navigate(['admin-site/developer-admin']);
  }

  deleteItem(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteId(id).subscribe({
          next: 
           (res) => {
            console.log(res)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Eliminado correctamente',
              showConfirmButton: false,
              timer: 1500
            })
            this.ngOnInit();
          },
          error: (err:any) => {
            this.ngOnInit();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Eliminado...',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
       
      }
    })
  }

}
