import { NgModule, inject } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { IfornekComponent } from './components/ifornek/ifornek.component';
import { XoxoyunComponent } from './components/xoxoyun/xoxoyun.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { RenklendirDirective } from './components/directive/renklendir.directive';
import { MyroutingDirective } from './myrouting.directive';
import { ValidDirective } from './components/valid.directive';
import { SimpleIfDirective } from './components/simple-if.directive';
import { PipeComponent } from './components/pipe/pipe.component';
import { NamePipe } from './components/pipe/name.pipe';
import { DatePipe } from '@angular/common';
import { AuthService } from './auth.service';
import { StatemanagementComponent } from './components/statemanagement/statemanagement.component';
import { TodoappComponent } from './components/todoapp/todoapp.component';
import { TableComponent } from './components/table/table.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MycountcomponentComponent } from './components/mycountcomponent/mycountcomponent.component';
import { ApiistekleriComponent } from './components/apiistekleri/apiistekleri.component';
import { InterceptorComponent } from './components/interceptor/interceptor.component';
import { TestInterceptor } from './test.interceptor';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NgformOrnekComponent } from './components/ngform-ornek/ngform-ornek.component';
import { Lazy1Component } from './components/lazy1/lazy1.component';
import { Lazy2Component } from './components/lazy2/lazy2.component';
import { Lazy3Component } from './components/lazy3/lazy3.component';
import { SignalornekComponent } from './components/signalornek/signalornek.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { LocalizationComponent } from './components/localization/localization.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(httpClient:HttpClient){
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    NotFoundComponent,
    LayoutsComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    IfornekComponent,
    XoxoyunComponent,
    DirectiveComponent,
    RenklendirDirective,
    MyroutingDirective,
    ValidDirective,
    SimpleIfDirective,
    PipeComponent,
    NamePipe,
    StatemanagementComponent,
    TodoappComponent,
    TableComponent,
    MycountcomponentComponent,
    ApiistekleriComponent,
    InterceptorComponent,
    ReactiveFormComponent,
    NgformOrnekComponent,
    Lazy1Component,
    Lazy2Component,
    Lazy3Component,
    SignalornekComponent,
    LocalizationComponent
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:"tr",
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    }),
    RouterModule.forRoot([
      {
        path:"",
        component:HomeComponent,
        canActivate:[()=>inject(AuthService).checkIsAuth()]
      }
    ]),
    ToastrModule.forRoot()//yapılandırmalar yapılabilir
    ,
    StoreModule.forRoot({count:counterReducer})
    //SharedModule,
    // RouterModule.forRoot([
    //   {
    //   path: "c1",
    //   component: C1Component
    // },
    // {
    //   path:"c2",
    //   component:C2Component
    // },
    // {
    //   path:"c3",
    //   component:C3Component
    // },
    // {
    //   path:"**",//garip bir url girildiğinde yönlendirilecek sayfa ayarı yapıldı.
    //   component:NotFoundComponent
    // }
    // ])
  ],
  providers: [DatePipe,{
    provide:HTTP_INTERCEPTORS,
    useClass:TestInterceptor,
    multi:true
  },provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
