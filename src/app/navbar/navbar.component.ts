import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartitemsService } from '../shared-services/cartitems.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'ecommerce';
  cartProducts: any[] = [];
  subTotal: number = 0;
  cartcount:any=0
  constructor( private router: Router,private cartitemservice:CartitemsService) {
   
  }
  ngOnInit(): void {
    this.cartitemservice.cartSubject.subscribe((cartitem:any)=>{
      this.cartcount=cartitem.length
    })
   
  }
  redirectToSale() {
    this.router.navigateByUrl("/sale");
  }
 ShowCart(){
   this.cartitemservice.displaysidecart()
 
  }
}
