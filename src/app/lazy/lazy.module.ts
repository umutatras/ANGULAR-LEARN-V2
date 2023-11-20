import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lazy1Component } from '../components/lazy1/lazy1.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [Lazy1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:"",
        component:Lazy1Component
      }
    ])
  ]
})
export class LazyModule { }
