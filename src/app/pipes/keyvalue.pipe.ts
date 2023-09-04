import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValue'
})
export class KeyvaluePipe implements PipeTransform {

  transform(obj: any, arg: any="key"): any {
    console.log("testkeyvalue")
    if(obj && arg=="key")
    {
      return Object.keys(obj)
    }
    if (obj && arg=="value") {
      return Object.values(obj)
      
    }
    return obj;
  }

}
