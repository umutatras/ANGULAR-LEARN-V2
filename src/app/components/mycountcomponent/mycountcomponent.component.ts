import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from 'src/app/counter.action';

@Component({
  selector: 'app-mycountcomponent',
  templateUrl: './mycountcomponent.component.html',
  styleUrls: ['./mycountcomponent.component.css']
})
export class MycountcomponentComponent {
  count$:Observable<number>
  count:number=0;
  constructor(private store:Store<{count: number}>){
      this.count$=this.store.select("count");
      this.store.select("count").subscribe(d=>{
        this.count=d;//async olmadan elde edebileceğimiz yöntem
      })
    }
  increment(){
    this.store.dispatch(increment());

  }
  decrement(){
    this.store.dispatch(decrement());

  }
  reset(){
    this.store.dispatch(reset());
  }

}
