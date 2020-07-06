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
    SelectionsortComponent.sorted =true;
    SelectionsortComponent.working=false;
  }
  render(){
    try{
    this.initialize();
    const arrayBars = document.getElementsByClassName('bar1') as HTMLCollectionOf<HTMLElement>;
    for(let i in arrayBars){
      arrayBars[i].style.height = String(this.values[i])+"px";
      arrayBars[i].style.backgroundColor = "black";
    }
  }
  catch(err){}
  }
  
  async selectionsort()
  {  
     try{
       SelectionsortComponent.working = true;
        var wrapper = document.getElementById("wrap");
        var bars = document.getElementsByClassName("bar1") as HTMLCollectionOf<HTMLElement>;
        for(var i=0;i<bars.length-1;i++){
          var minpos=i;
          for(var j=i+1;j<bars.length;j++){
            var promise = await new Promise(r => setTimeout(r, (3000/this.arraylength)));
            bars[j-1].style.backgroundColor="black";
            bars[bars.length-1].style.backgroundColor="black";
            if(bars[j].style.height>bars[minpos].style.height)
            {
                bars[j].style.backgroundColor="red";
                bars[i].style.backgroundColor="red";
            }
            else
            {
                bars[j].style.backgroundColor="green";
                bars[i].style.backgroundColor="green";
                minpos=j;
            }
          }
          bars[i].style.backgroundColor="blue";
          var temp = bars[i].style.height;
          bars[i].style.height = bars[minpos].style.height;
          bars[minpos].style.height = String(temp);
        }
        bars[i].style.backgroundColor="blue";
        SelectionsortComponent.sorted =true;
        SelectionsortComponent.working=false;
      }
      catch(err){
        console.log("Sudden stop in sort!!!!");
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
