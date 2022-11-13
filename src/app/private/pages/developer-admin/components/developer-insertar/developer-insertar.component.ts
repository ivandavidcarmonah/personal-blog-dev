import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { error } from 'console';
import Swal from 'sweetalert2';
import { DataBlog } from '../../class/class-developer-blog';
import { DeveloperAdminService } from '../../developer-admin.service';
import { IDeveloperAdmin } from '../../interface/admin-developer';




@Component({
  selector: 'app-developer-insertar',
  templateUrl: './developer-insertar.component.html',
  styleUrls: ['./developer-insertar.component.scss']
})
export class DeveloperInsertarComponent implements OnInit {

  public miForm: FormGroup = this.fb.group({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    imagenHeader: new FormControl(''),
    imagenBody: new FormControl('')
  })


  public insertar!: string;
  public data!: DataBlog;
  public id!: string;
  public file!: File;
  public fileBody!: File;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private fb: FormBuilder, private service: DeveloperAdminService) {
   }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(res => {
      this.insertar = res['insertar'];
      console.log(res['id'] as number)
      if (this.insertar === 'false' ) {
        this.getId(res['id'] as number);
      } 
      else {
        this.insertar = 'true';
      }
    });
  }
  getId(id: number) {
    console.log(id)
    this.service.getById(id).subscribe( res => {
      console.log(res)
      this.data = {...res};

        this.miForm = this.fb.group({
          title: new FormControl(res.title, [Validators.required, Validators.minLength(2)]),
          description: new FormControl(res.description, Validators.required),
          content: new FormControl(res.content, Validators.required),
          imagenHeader: new FormControl(res.imagenHeader),
          imagenBody: new FormControl(res.imagenHeader),
          id: new FormControl(res.id),
        })

    })
  }


  isDataValid(){
    if (this.miForm.value) {
      this.data = this.miForm.value;
      this.saveData();
    }
  }

  saveData() {
    // console.log(this.data)
    if (this.data.id != undefined) {
      this.updateObject();
    }
    else {
      this.newObject();
    }
  }

  newObject(){
    this.service.saveData(this.data).subscribe({
      next: (res) => {
        this.data.id= res.id;
        this.data = res;
        console.log(this.data)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error: (err:any) => {
        console.log(JSON.stringify(err.error));
        Swal.fire({
          icon: 'error',
          title: 'Oops...'+JSON.stringify(err.error),
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    });
  }

  updateObject() {
    this.service.updateData(this.data).subscribe({
      next: (res) => {
        this.ngOnInit();
        console.log(res)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been UPDATE',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error: (err:any) => {
        console.log(JSON.stringify(err.error));
        Swal.fire({
          icon: 'error',
          title: 'Oops...'+JSON.stringify(err.error),
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    });
  }

  returnUrl(){
    this.router.navigate(['admin-site/developer-admin/']);
  }

  listadoUrl(){
    this.router.navigate(['admin-site/developer-admin/list']);
  }

  onFileSelectedHeader(event:any){
    this.file = event.target.files[0];
  }

  onFileSelectedBody(event:any){
    this.fileBody = event.target.files[0];
  }

  saveImgHeader(){
    this.service.saveImgHeader(this.file, this.data.id).subscribe({
      next: (res) => {
        this.ngOnInit();
        console.log(res)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been UPDATE',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error: (err:any) => {
        this.ngOnInit();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been UPDATE',
          showConfirmButton: false,
          timer: 3000
        })      
      }
    });
  }

  saveImgBody(){
    this.service.saveImgBody(this.fileBody, this.data.id).subscribe({
      next: (res) => {
        this.ngOnInit();
        console.log(res)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been UPDATE',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error: (err:any) => {
        this.ngOnInit();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been UPDATE',
          showConfirmButton: false,
          timer: 1500
        })      
      }
    });
  }

}
