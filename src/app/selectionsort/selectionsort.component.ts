import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectionsort',
  templateUrl: './selectionsort.component.html',
  styleUrls: ['./selectionsort.component.scss']
})
export class SelectionsortComponent implements OnInit {
  values:any[]=[];
  arraylength:number;
  static working:boolean=false;
  // static exit:boolean=false;
  static sorted:boolean=false;
  constructor() { 
    this.arraylength = 10;
  }

  ngOnInit(): void {
    this.initialize();
  }
  initialize(){
    this.values = [];
    for(let k=0;k<this.arraylength;k++){
      this.values.push(Math.floor(Math.random()*300)+100);
    }
  }
  
  selectionsort()
  {  
     if(!SelectionsortComponent.working&&!SelectionsortComponent.sorted){
       //BubblesortComponent.exit = false;
       SelectionsortComponent.working = true;
        var wrapper = document.getElementById("wrap");
        var bars = document.getElementsByClassName("bar1") as HTMLCollectionOf<HTMLElement>;
        // for(){
        //   for(){}
        // }
        // var i=0;
        // var j=i+1;
        // var minpos=i;
        // var animate = setInterval(function(){
        //     bars[j-1].style.backgroundColor="black";
        //     bars[bars.length-1].style.backgroundColor="black";
        //     if(bars[j].style.height>bars[minpos].style.height)
        //     {
        //         bars[j].style.backgroundColor="red";
        //         bars[i].style.backgroundColor="red";
        //     }
        //     else
        //     {
        //         bars[j].style.backgroundColor="green";
        //         bars[i].style.backgroundColor="green";
        //         minpos=j;
        //     }
        //     j=j+1;
        //     if(j==(bars.length))
        //     {
        //         bars[i].style.backgroundColor="blue";
        //         var temp = bars[i].style.height;
        //         bars[i].style.height = bars[minpos].style.height;
        //         bars[minpos].style.height = String(temp);
        //         i=i+1;
        //         j=i+1;
        //         minpos=i;
        //     }
        //     if(i==(bars.length-1))
        //     {
        //         bars[i].style.backgroundColor="blue";
        //         SelectionsortComponent.sorted =true;
        //         SelectionsortComponent.working=false;
        //         clearTimeout(animate);
        //     }
        // },(5000/this.arraylength));
      }
  }
  checkworking(){
    return SelectionsortComponent.working;
  }
  checksorted(){
    return SelectionsortComponent.sorted;
  }
  // exitfunc(){
  //     BubblesortComponent.exit = true;
  // }
}
