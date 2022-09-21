import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  showToolTip: boolean = false
  @Input() message: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  openToolTip(){
    if(this.showToolTip){
      this.showToolTip=false;
      return;
    }
    this.showToolTip = true
  }

  closeToolTip(e: any){
    e.preventDefault
    this.showToolTip = false
  }

}
