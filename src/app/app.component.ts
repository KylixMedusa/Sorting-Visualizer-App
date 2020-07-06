import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Sorting-Visualizer-App';
  loaderviewing:boolean = true;
  ngOnInit():void{
    this.loaderviewing = false;
  }

}
