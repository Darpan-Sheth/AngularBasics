import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from '../pages/search/search.component';
import { EventFormComponent } from '../pages/event-form/event-form.component';

const routes: Routes = [
  {
    path: '',
    component: EventFormComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { 
}
