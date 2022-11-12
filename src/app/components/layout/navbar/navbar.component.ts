import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faDoorOpen, faIdCard, faLaptopCode, faRobot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  public faCode = faLaptopCode;
  public faRobot = faRobot;
  public faDoorOpen = faDoorOpen;
  public faIdCard = faIdCard;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateBlog() {
    this.router.navigate(['/admin-site'])
  }

}
