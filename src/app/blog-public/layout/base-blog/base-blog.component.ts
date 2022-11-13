import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-base-blog',
  templateUrl: './base-blog.component.html',
  styleUrls: ['./base-blog.component.scss']
})
export class BaseBlogComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
  }
  irContacme(){
    this.router.navigate(['personal/contact-me']);
  }

}
