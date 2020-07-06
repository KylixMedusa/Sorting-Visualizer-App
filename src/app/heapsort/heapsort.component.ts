import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heapsort',
  templateUrl: './heapsort.component.html',
  styleUrls: ['./heapsort.component.scss']
})
export class HeapsortComponent implements OnInit {
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
    this.values = [];
    for(let k=0;k<this.arraylength;k++){
      this.values.push(Math.floor(Math.random()*300)+100);
    }
    HeapsortComponent.sorted =true;
    HeapsortComponent.working=false;
    this.arr = Array.from(this.values);
  }
  render(){
    this.initialize();
    const arrayBars = document.getElementsByClassName('bar4') as HTMLCollectionOf<HTMLElement>;
    for(let i in arrayBars){
      arrayBars[i].style.height = String(this.values[i])+"px";
      arrayBars[i].style.backgroundColor = "black";
    }
  }
async heapsort(){
    HeapsortComponent.working = true;
    await this.sort();
    HeapsortComponent.working=false;
}
async heapify(n, i) 
{ 
  try{
    const arrayBars = document.getElementsByClassName('bar4') as HTMLCollectionOf<HTMLElement> ;
    var largest = i; // Initialize largest as root 
    var l = 2*i + 1; // left = 2*i + 1 
    var r = 2*i + 2; // right = 2*i + 2 

    // If left child is larger than root 
    if (l < n && this.arr[l] > this.arr[largest]) 
        largest = l; 

    // If right child is larger than largest so far 
    if (r < n && this.arr[r] > this.arr[largest]) 
        largest = r; 

    // If largest is not root 
    if (largest != i) 
    { 
        arrayBars[largest].style.backgroundColor="red";
        arrayBars[i].style.backgroundColor="red";
        await this.swap(i,largest);
        arrayBars[largest].style.backgroundColor="black";
        arrayBars[i].style.backgroundColor="black";
        // Recursively heapify the affected sub-tree 
        await this.heapify(n, largest); 
    } 
    else{
        arrayBars[largest].style.backgroundColor="green";
        await new Promise(r => setTimeout(r, 500));
        arrayBars[largest].style.backgroundColor="black";
    }
  }
  catch(err){
    console.log("Sudden stop in sort!!!!");
  }
} 


/* The main function that implements QuickSort() 
arr[] --> Array to be sorted, 
low  --> Starting index, 
high  --> Ending index */
async sort() 
{ 
  try{
    var n = this.arr.length; 
    const arrayBars = document.getElementsByClassName('bar4') as HTMLCollectionOf<HTMLElement> ;
    // Build heap (rearrange array) 
    for (var i = n / 2 - 1; i >= 0; i--) 
        await this.heapify(n, i); 

    // One by one extract an element from heap 
    for (var i=n-1; i>0; i--) 
    { 
      arrayBars[0].style.backgroundColor="red";
      arrayBars[i].style.backgroundColor="red";
      // Move current root to end 
      await this.swap(0,i);
      arrayBars[0].style.backgroundColor="black";
      arrayBars[i].style.backgroundColor="blue";
      // call max heapify on the reduced heap 
      await this.heapify(i, 0); 
      if(i==1){
          arrayBars[0].style.backgroundColor="blue";
      }
    } 
  
  }
  catch(err){
    console.log("Sudden stop in sort!!!!");
  }
} 
async swap(i,high){
  const arrayBars = document.getElementsByClassName('bar4') as HTMLCollectionOf<HTMLElement> ;
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
    return HeapsortComponent.working;
  }
  checksorted(){
    return HeapsortComponent.sorted;
  }
  // exitfunc(){
  //     HeapsortComponent.exit = true;
  // }
  
}
