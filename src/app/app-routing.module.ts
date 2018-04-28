import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SwaggerComponent} from "./swagger/swagger.component";

const routes: Routes = [
  {path: 'swagger', component: SwaggerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
