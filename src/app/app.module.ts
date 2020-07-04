import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BubblesortComponent } from './bubblesort/bubblesort.component';
import { SelectionsortComponent } from './selectionsort/selectionsort.component';
import { MergesortComponent } from './mergesort/mergesort.component';
import { QuicksortComponent } from './quicksort/quicksort.component';
import { HeapsortComponent } from './heapsort/heapsort.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BubblesortComponent,
    SelectionsortComponent,
    MergesortComponent,
    QuicksortComponent,
    HeapsortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
