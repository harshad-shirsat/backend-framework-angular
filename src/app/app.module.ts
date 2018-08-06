import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { MenuComponent } from './menu/menu.component';
import { PagejsonComponent } from './pagejson/pagejson.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  { path: 'sample', component: SampleComponentComponent },
  { path: 'view/:id', component: PagejsonComponent },
  { path: 'detail/:id/:paramId', component: DetailComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    SampleComponentComponent,
    MenuComponent,

    PagejsonComponent,

    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
