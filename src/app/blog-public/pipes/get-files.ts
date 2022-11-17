import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'Imagen'
})
export class GetImagen implements PipeTransform {

  transform(img: string, contoller: string): string {
    if (img === null || img === undefined) {
      return './../../../../assets/images/others/logo-placeholder.jpg';
    }
    let urlImg:string = `${environment.BASEURL}${contoller}${img}`;
    return urlImg;
  }

}