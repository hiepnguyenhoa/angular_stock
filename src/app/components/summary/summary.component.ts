import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent{

  @Input() stock: any;

  constructor() { }


  isNegative(){
    return (this.stock && this.stock.change < 0);
  }

  isPositive(){
    return !this.isNegative();
  }
}
