import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataBlog, DataResponseBlog } from 'src/app/components/class/class-developer-blog';
import { DesarrolloService } from 'src/app/services/desarrollo.service';
import { faCoffee, faCubes, faImage, faLaptopCode, faLayerGroup, faPlug, faRobot } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  img_rute = environment.WEB_DEVELOPER.GET_IMAGEN;
  public listData: DataBlog[] = [];
  public faCubes = faCubes;
  public faLayerGroup = faLayerGroup;
  public faImage = faImage;
  public faPlug = faPlug;
  constructor(private service: DesarrolloService,private router: Router, private spinner: NgxSpinnerService) { }
  


  ngOnInit(): void {
    this.spinner.show();
    this.getDesarrollos();
  }

  getDesarrollos(){
    this.service.getDevelopersBlogList().subscribe((res:DataResponseBlog) => {
      this.listData = res.dataList;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    })
  }

  irBlog(data:DataBlog){
    this.router.navigate([`/blog-public/${data.id}`])
  }

}
