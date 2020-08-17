import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WineListComponent } from './views/wine-list/wine-list.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
