import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataBlog } from 'src/app/components/class/class-developer-blog';
import { DeveloperAdminService } from 'src/app/private/pages/developer-admin/developer-admin.service';

@Component({
  selector: 'app-ver-entrada-blog',
  templateUrl: './ver-entrada-blog.component.html',
  styleUrls: ['./ver-entrada-blog.component.scss']
})
export class VerEntradaBlogComponent implements OnInit {
	selected = 7;
	hovered = 0;
	readonly = true;
  public data!: DataBlog;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,  private service: DeveloperAdminService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.getId(res['id']);
    });
  }

  getId(id: number) {
    console.log(id)
    this.service.getById(id).subscribe( res => {
      console.log(res)
      this.data = {...res};
    })
  }

}
