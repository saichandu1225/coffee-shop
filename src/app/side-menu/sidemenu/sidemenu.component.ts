import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  fooditems: any = {
    coffee: [
      { image: 'url', name: 'Espresso', prize: '25' },
      { image: 'url', name: 'Latte', prize: '' },
      { image: 'url', name: 'Cappuccino', prize: '15.23' },
      { image: 'url', name: 'Cold Coffee', prize: '16' },
    ],
    cake: [
      { image: 'url', name: 'Chocolate Cake', prize: '8.24' },
      { image: 'url', name: 'Cheesecake', prize: '4.56' },
      { image: 'url', name: 'Carrot Cake', prize: '14.23' },
    ],
    milkshake: [
      { image: 'url', name: 'Chocolate Milkshake', prize: '12.67' },
      { image: 'url', name: 'Strawberry Milkshake', prize: '15.23' },
      { image: 'url', name: 'Vanilla Milkshake', prize: '11.51' },
      { image: 'url', name: 'Nuts Vanilla Milkshake', prize: '20' },
    ],
    starters: [
      { image: 'url', name: 'French Fries', prize: '' },
      { image: 'url', name: 'Onion Rings', prize: '' },
      { image: 'url', name: 'Mozzarella Sticks', prize: '' },
      { image: 'url', name: 'Pizza', prize: '' },
    ],
  };

  activeSubMenus: { [key: string]: boolean } = {};

  ngOnInit() {}
  getObjKeys(obj: Object) {
    return Object.keys(obj);
  }

  isSubMenuOpen(menuName: string): boolean {
    return this.activeSubMenus[menuName] || false;
  }

  toggleSubMenu(menuName: string) {
    this.activeSubMenus[menuName] = !this.activeSubMenus[menuName];
  }
}
