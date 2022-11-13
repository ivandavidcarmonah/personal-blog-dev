import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  public miForm: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', Validators.required),
  })

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    const {email, password} = this.miForm.value;
    if (this.miForm.valid) {
      this.auth.login(email, password).subscribe(res => {
        if (res) {
          this.router.navigate([`admin-site/`])
        }
      });
    }
  }

}
