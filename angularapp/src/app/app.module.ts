import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { EditabletableComponent } from './editabletable/editabletable.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    EditabletableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
