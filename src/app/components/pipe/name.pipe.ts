import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
})
export class NamePipe implements PipeTransform {

  transform(value: any[],searc: string ){
    return value.filter(p=>{
      const name=p.name.toLowerCase().includes(searc.toLocaleLowerCase());
      const age=p.age.toString().includes(searc);
      return name+age;
    });
  }

  // transform(value: {name:string,age:number}[], searc:string): string[] {
  //   return value.filter(p=>p.toLowerCase().includes(searc.toLocaleLowerCase()));
  // }

}
