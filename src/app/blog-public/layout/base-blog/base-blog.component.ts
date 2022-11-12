import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-base-blog',
  templateUrl: './base-blog.component.html',
  styleUrls: ['./base-blog.component.scss']
})
export class BaseBlogComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

}
