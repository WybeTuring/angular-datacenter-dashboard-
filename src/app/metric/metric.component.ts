import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit {

  private __value: number = 0;
  private __max: number = 100;

  @Input('used')
  set value(value: number){
    if(isNaN(value)) value = 0;
    this.__value = value;
  }

  get value(): number { return this.__value;}

  @Input('available')
  set max(max: number){
    if(isNaN(max)) max = 100;
    this.__max = max;
  }

  get max(): number { return this.__max;}

  isDanger(){
    return this.value / this.max > 0.7;
  }

  constructor() { }

  ngOnInit() {
  }

}
