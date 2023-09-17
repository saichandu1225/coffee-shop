import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartitemsService } from 'src/app/shared-services/cartitems.service';

@Component({
  selector: 'app-price-purchase',
  templateUrl: './price-purchase.component.html',
  styleUrls: ['./price-purchase.component.css']
})
export class PricePurchaseComponent implements OnInit {

  constructor( private cartService: CartitemsService,private formBuilder: FormBuilder,) { }
  items = this.cartService.selectedItems;
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  ngOnInit() {
  }

}
