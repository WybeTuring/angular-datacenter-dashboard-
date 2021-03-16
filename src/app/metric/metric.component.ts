import {ChangeDetectionStrategy, Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent implements OnChanges, OnInit {

  @Input('used') value: number = 0;
  @Input('available') max: number = 100;

  ngOnChanges(changes: any){
    if(changes.value && isNaN(changes.value.currentValue)) this.value = 0;
    if(changes.max && isNaN(changes.max.currentValue)) this.max = 0;
  }

  isDanger(){
    return this.value / this.max > 0.7;
  }

  constructor() { }

  ngOnInit() {
  }

}
