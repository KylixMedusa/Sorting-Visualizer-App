import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mergesort',
  templateUrl: './mergesort.component.html',
  styleUrls: ['./mergesort.component.scss']
})
export class MergesortComponent implements OnInit {
  values:any[]=[];
  arr:any[]=[];
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
    MergesortComponent.sorted =true;
    MergesortComponent.working=false;
    this.arr = Array.from(this.values);
  }
  render(){
    try{
    this.initialize();
    const arrayBars = document.getElementsByClassName('bar2') as HTMLCollectionOf<HTMLElement>;
    for(let i in arrayBars){
      arrayBars[i].style.height = String(this.values[i])+"px";
      arrayBars[i].style.backgroundColor = "black";
    }
  }
  catch(err){}
  }
  async mergesort(){
    try{
      MergesortComponent.working = true;
      const animations = this.getMergeSortAnimations(this.arr);
      const arrayBars = document.getElementsByClassName('bar2') as HTMLCollectionOf<HTMLElement> ;
      for (let i = 0; i <animations.length; i++) {
          var promise = await new Promise(r => setTimeout(r, (3000/this.arraylength)));
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 == 0 ? "red" : "black";
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
          } else {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
              //barOneStyle.backgroundColor = "Dodgerblue";
          }
      }
      MergesortComponent.sorted =true;
      var promise = await new Promise(r => setTimeout(r, (3000/this.arraylength)));
      for(let j in this.values){
        arrayBars[j].style.backgroundColor="blue";
      }
      MergesortComponent.working=false;
    }
    catch(err){
      console.log("Sudden stop in sort!!!!");
    }
}
getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    this.mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

 mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
    ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    this.mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    this.mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    this.doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
    ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
        } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}
    while (i <= middleIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, i]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, i]);
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([j, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([j, j]);
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}
  checkworking(){
    return MergesortComponent.working;
  }
  checksorted(){
    return MergesortComponent.sorted;
  }
  // exitfunc(){
  //     MergesortComponent.exit = true;
  // }
}
