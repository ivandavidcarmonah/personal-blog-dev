import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-developer-admin',
  templateUrl: './developer-admin.component.html',
  styleUrls: ['./developer-admin.component.scss']
})
export class DeveloperAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  nuevaEntrada(){
    this.router.navigate(['admin-site/developer-admin/new'], {queryParams: {insertar: true}} )
  }

  modificarEntrada(){
    this.router.navigate(['admin-site/developer-admin/insert'], {queryParams: {insertar: false}} )
  }

}
