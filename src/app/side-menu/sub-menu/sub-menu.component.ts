import { Component, Input } from '@angular/core';
import { CurrencyFormatPipe } from 'src/app/currency-format.pipe/currency-format.pipe';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css'],
})
export class SubMenuComponent {
  @Input() menuItems: any[] = [];
  @Input() menuName: string = '';
  @Input() showSubMenu: boolean = false;

  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
// export class SubMenuComponent implements OnInit {
// @Input() submenudata:any=[]
//   constructor() {
//    }
//   ngOnInit() {
//     console.log(this.submenudata)
//   }
//
 }
}
