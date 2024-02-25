import { Component, Input, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent   {
  @Input({required: true}) duration: number =0;
  @Input({required: true}) message: string ='';
  number: number=0;

  constructor(){
    //before render
    console.log('Constructor');
    console.log('-'.repeat(10));
   
  }

  
  ngOnChanges(changes:SimpleChanges): void {
    //se ejecuta antes del render
    console.log("NgOnChanges");
    console.log('-'.repeat(10));
    console.log(changes)
  }

  NgOnInit(){
    //after render
    console.log('NgOnInit');
    console.log('-'.repeat(10));
    console.log('duration: ', this.duration);
    console.log('message: ', this.message);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    console.log('number en el destroy'+this.number);
  }
}
