import { Component, OnInit, NgModule, OnDestroy } from '@angular/core';
import { exit } from 'process';

@Component({
  selector: 'app-bubblesort',
  templateUrl: './bubblesort.component.html',
  styleUrls: ['./bubblesort.component.scss']
})
export class BubblesortComponent implements OnInit,OnDestroy {

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
  ngOnDestroy(): void {
    
  }
  initialize(){
    this.values = [];
    for(let k=0;k<this.arraylength;k++){
      this.values.push(Math.floor(Math.random()*300)+100);
    }
    BubblesortComponent.sorted =true;
    BubblesortComponent.working=false;
  }
  render(){
    this.initialize();
    const arrayBars = document.getElementsByClassName('bar') as HTMLCollectionOf<HTMLElement>;
    for(let i in arrayBars){
      arrayBars[i].style.height = String(this.values[i])+"px";
      arrayBars[i].style.backgroundColor = "black";
    }
  }
  
  async bubblesort()
  {  
      try{
        BubblesortComponent.working = true;
        var wrapper = document.getElementById("wrap");
        var bars = document.getElementsByClassName("bar") as HTMLCollectionOf<HTMLElement> ;
        for(var i=0; i<bars.length-1;i++){
            for(var j=0;j<bars.length-i-1;j++){
              var promise = await new Promise(r => setTimeout(r, (3000/this.arraylength)));
                if(j!=0)
                {
                    bars[j-1].style.backgroundColor="black";
                }
                if(bars[j].style.height>bars[j+1].style.height)
                {
                    bars[j].style.backgroundColor="red";
                    bars[j+1].style.backgroundColor="red";
                    var node=bars[j];
                    wrapper.removeChild(bars[j]);
                    wrapper.insertBefore(node,bars[j+1]);
                }
                else
                {
                    bars[j].style.backgroundColor="green";
                    bars[j+1].style.backgroundColor="green";
                }
            }
            bars[j].style.backgroundColor="blue";
            bars[j-1].style.backgroundColor="black";
        }
        bars[0].style.backgroundColor="blue";
        BubblesortComponent.sorted =true;
        BubblesortComponent.working=false;
    }
    catch(err){
      console.log("Sudden stop in sort!!!!");
    }
  }
  checkworking(){
    return BubblesortComponent.working;
  }
  checksorted(){
    return BubblesortComponent.sorted;
  }
  // exitfunc(){
  //     BubblesortComponent.exit = true;
  // }
}
