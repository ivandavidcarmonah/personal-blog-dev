import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataBlog, DataResponseBlog } from 'src/app/components/class/class-developer-blog';
import { DesarrolloService } from 'src/app/services/desarrollo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './../../../app.component.scss']
})
export class HomeComponent implements OnInit {
  public listData: DataBlog[] = [];

  constructor(private service: DesarrolloService,private router: Router) { }

  ngOnInit(): void {
    this.getDesarrollos();
  }

  getDesarrollos(){
    this.service.getDevelopersBlogList().subscribe((res:DataResponseBlog) => {
      this.listData = res.dataList;
    })
  }

  irBlog(data:DataBlog){
    this.router.navigate([`/blog-public/${data.id}`])
  }

}
