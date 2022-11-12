import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Imagen'
})
export class GetImagen implements PipeTransform {

  transform(img: string, contoller: string): string {
    if (img === null || img === undefined) {
        return './../../../../assets/images/others/logo-placeholder.jpg';
    }
    let urlImg:string = `http://localhost:8080/api/${contoller}/get-file/${img}`;
    return urlImg;
  }

}