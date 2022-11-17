import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataBlog, DataResponseBlog } from 'src/app/components/class/class-developer-blog';
import { DeveloperAdminService } from 'src/app/private/pages/developer-admin/developer-admin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ver-entrada-blog',
  templateUrl: './ver-entrada-blog.component.html',
  styleUrls: ['./ver-entrada-blog.component.scss']
})
export class VerEntradaBlogComponent implements OnInit {
  img_rute = environment.WEB_DEVELOPER.GET_IMAGEN;
	selected = 7;
	hovered = 0;
	readonly = true;
  public data!: DataBlog;
  public listData: DataBlog[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router,  private service: DeveloperAdminService,  private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.spinner.show();
      this.getId(res['id']);
    });
  }

  getId(id: number) {
    console.log(id)
    this.service.getById(id).subscribe( res => {
      console.log(res)
      this.data = {...res};
     this.resetScroll();
      this.service.getDevelopersBlogList().subscribe((res:DataResponseBlog) => {
        this.listData = res.dataList.filter(element => {
          return this.data.id !== element.id
        });
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
      })
    })
  }
  resetScroll() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  irBlog(data:DataBlog){
    this.router.navigate([`/blog-public/${data.id}`])
  }

  getDesarrollos(){
    
  }

}
