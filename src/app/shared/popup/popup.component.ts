import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
@Input() datalist:string='';
@Input() buttons:string[]=['ok','Cancel']
@Output() data : EventEmitter<string>=new EventEmitter<string>();
  constructor() { }
  
  ngOnInit() {
  
  }
  emit(item:string)
  {
    this.data.emit(item);
  }
  
}
