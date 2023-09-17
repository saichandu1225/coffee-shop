import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartitemsService } from './shared-services/cartitems.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
isshow:any
  constructor(private cartservice:CartitemsService){
  
  }
  ngOnInit(){
    this.cartservice.cartSubject1.subscribe((cartitem:any)=>{
      this.isshow=cartitem;
    })
  }


}
