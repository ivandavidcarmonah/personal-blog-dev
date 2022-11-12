import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { IDesarrollo } from 'src/app/interfaces/desarrollo.interface';
import { DesarrolloService } from 'src/app/services/desarrollo.service';
import { DataBlog, DataResponseBlog } from '../class/class-developer-blog';

@Component({
  selector: 'app-developments',
  templateUrl: './developments.component.html',
  styleUrls: ['./developments.component.scss', './../../app.component.scss']
})
export class DevelopmentsComponent implements OnInit {
  public listData: DataBlog[] = [];

 

  constructor(private service: DesarrolloService,private router: Router) { }

  ngOnInit(): void {
    this. getDesarrollos();
  }


  getDesarrollos(){
    this.service.getDevelopersBlogList().subscribe((res:DataResponseBlog) => {
      console.log(res)
      this.listData = res.dataList;
    })
  }

  irBlog(data:DataBlog){
    console.log('navegar a blog')
    this.router.navigate([`/blog-public/${data.id}`])
  }

}
