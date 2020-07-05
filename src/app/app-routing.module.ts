import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BubblesortComponent } from './bubblesort/bubblesort.component';
import { SelectionsortComponent } from './selectionsort/selectionsort.component';
import { MergesortComponent } from './mergesort/mergesort.component';
import { QuicksortComponent } from './quicksort/quicksort.component';
import { HeapsortComponent } from './heapsort/heapsort.component';

const routes: Routes = [
  {path: 'bubblesort', component: BubblesortComponent},
  {path:'selectionsort', component:SelectionsortComponent},
  {path:'mergesort', component:MergesortComponent},
  {path:'quicksort', component:QuicksortComponent},
  {path:'heapsort', component:HeapsortComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
