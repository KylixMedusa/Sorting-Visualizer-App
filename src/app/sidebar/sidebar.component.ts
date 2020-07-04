import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  class: string;
}

export const routes: RouteInfo[]=[
  {path: 'bubblesort', title: "Bubble Sort",class:''},
  {path:'selectionsort', title:"Selection Sort",class:''},
  {path:'mergesort', title:"Merge Sort",class:''},
  {path:'quicksort', title:"Quick Sort",class:''},
  {path:'heapsort', title:"Heap Sort",class:''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  constructor() { }

  ngOnInit(): void {
    this.menuItems = routes.filter(menuItem => menuItem);
  }

}
