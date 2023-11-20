import { Component, computed, effect, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signalornek',
  templateUrl: './signalornek.component.html',
  styleUrls: ['./signalornek.component.css'],
  host:{ngSkipHydration:'true'}
})
export class SignalornekComponent {

  constructor(private toastr:ToastrService)//toastr kullanılabilir inject
  {

  }
count=signal(0);
results=signal<string[]>([]);

countPlus=computed(()=>this.count()+1);// deger eşitleme

countEffect=effect(()=>console.log(this.count()+"değişti"));//fonksiyonu tetikleme
increment(){
  this.count.update((oldValue)=>oldValue+1);
  this.results.update((oldValue)=>[...oldValue,"increment"]);
}
decrement(){
  this.count.update((oldValue)=>oldValue-1);
  this.results.update((oldValue)=>[...oldValue,"decrement"]);

  //this.results.mutate((oldValue)=>oldValue.push("decrement")); mutate daha çok listeleri yada objeleri güncellemekte kullanılır

  // this.count.set(0);
  // this.count.set(this.count()+1); sette 2 tane overload var birincisi direkt değer verme ikincisi ise eski değeri eldet etme

}

callSwal()
{
  Swal.fire("Title","Message");//scoplar ile özelleştirilebilir

  Swal.fire({
    text:"deneme",
    title:"baslik",
    confirmButtonText:"onayla",
  cancelButtonText:"vazgeç"
  }).then(res=>{
    if(res.isConfirmed)
    {
      alert("Swal Onaylandı")
    }
   if(res.isDismissed)
    {
      alert("vazgeçildi")
    }
  })
}
}
