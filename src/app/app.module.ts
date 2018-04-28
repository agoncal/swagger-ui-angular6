import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwaggerComponent } from './swagger/swagger.component';

@NgModule({
  declarations: [
    AppComponent,
    SwaggerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SwaggerComponent]
})
export class AppModule { }
