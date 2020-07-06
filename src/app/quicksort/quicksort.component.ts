import { Component, OnInit } from '@angular/core';
import { newArray } from '@angular/compiler/src/util';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-quicksort',
  templateUrl: './quicksort.component.html',
  styleUrls: ['./quicksort.component.scss']
})
export class QuicksortComponent implements OnInit {

  values:any[]=[];
  arr:any[];
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
    this.values = new Array(this.arraylength);
    for(let k=0;k<this.arraylength;k++){
      this.values[k] = (Math.floor(Math.random()*300)+100);
    }
    QuicksortComponent.sorted =true;
    QuicksortComponent.working=false;
    this.arr = Object.assign([],this.values);
  }
  render(){
    try{
    this.initialize();
    const arrayBars = document.getElementsByClassName('bar3') as HTMLCollectionOf<HTMLElement>;
    for(let i in arrayBars){
      arrayBars[i].style.height = String(this.values[i])+"px";
      arrayBars[i].style.backgroundColor = "black";
    }
  }
  catch(err){}
  }
async quicksort(){
  try{
    QuicksortComponent.working = true;
    await this.sort(0,this.values.length-1);
    const arrayBars = document.getElementsByClassName('bar3') as HTMLCollectionOf<HTMLElement>;
    await new Promise(r => setTimeout(r, 3000/this.arraylength));
    for(let index in this.values){
        arrayBars[index].style.backgroundColor="blue";
    }
    QuicksortComponent.working=false;
  }
  catch(err){
    console.log("Sudden stop in sort!!!!");
  }
}
async partition(low, high) 
{ 
  try{
  const arrayBars = document.getElementsByClassName('bar3') as HTMLCollectionOf<HTMLElement> ;
  var pivot = this.arr[high]; 
  arrayBars[high].style.backgroundColor="purple"; 
  var i = (low-1); // index of smaller element 
  for (var j=low; j<high; j++) 
  { 
      
      // If current element is smaller than the pivot 
      if (this.arr[j] < pivot) 
      { 
          i++; 
          arrayBars[j].style.backgroundColor="red";
          arrayBars[i].style.backgroundColor="red";
          // swap arr[i] and arr[j] 
          await this.swap(i,j);
          arrayBars[j].style.backgroundColor="black";
          arrayBars[i].style.backgroundColor="black";
      } 
      else{
          arrayBars[j].style.backgroundColor="green";
            await new Promise(r => setTimeout(r, 3000/this.arraylength));
            arrayBars[j].style.backgroundColor="black";
      }
  } 
  // swap arr[i+1] and arr[high] (or pivot) 
  arrayBars[high].style.backgroundColor="red";
  arrayBars[i+1].style.backgroundColor="red"; 
  await this.swap(i+1,high);
  arrayBars[high].style.backgroundColor="black";
  arrayBars[i+1].style.backgroundColor="blue"; 
  return i+1; 
  }
  catch(err){
    console.log("Sudden stop in sort!!!!");
  }
} 


/* The main function that implements QuickSort() 
arr[] --> Array to be sorted, 
low  --> Starting index, 
high  --> Ending index */
async sort(low, high) 
{ 
  try{
  if (low < high) 
  { 
      /* pi is partitioning index, arr[pi] is  
      now at right place */
      var pi =await this.partition(low, high); 

      // Recursively sort elements before 
      // partition and after partition 
        await Promise.all([this.sort(low, pi-1),this.sort(pi+1, high)]);
  } 
  
  }
  catch(err){
    console.log("Sudden stop in sort!!!!");
  }
} 
async swap(i,high){
  const arrayBars = document.getElementsByClassName('bar3') as HTMLCollectionOf<HTMLElement> ;
  try{
    await new Promise(r => setTimeout(r, 5000/this.arraylength));
    var temp = this.arr[i]; 
    arrayBars[i].style.height = String(this.arr[high])+"px" ;
    this.arr[i] = this.arr[high];
    arrayBars[high].style.height = String(temp)+"px" ; 
    this.arr[high] = temp;
  }
  catch(err){
    console.log("Sudden stop in sort!!!!");
  }
}

  checkworking(){
    return QuicksortComponent.working;
  }
  checksorted(){
    return QuicksortComponent.sorted;
  }
  // exitfunc(){
  //     QuicksortComponent.exit = true;
  // }
}
