import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  cardsData:any=[];
  constructor(private _http:HttpClient,)
  {
    this._http.get<any>("http://localhost:3000/cardsData")
    .subscribe(res=>{
      this.cardsData=res;
      console.log(res)
    },err=>{
      alert('something is wrong')
    }
    )
  }
  ngOnInit() {
    
  }
}
