import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu.model';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[];
  constructor(private router: Router, private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenu()
    .subscribe( data => {
      this.menus = data;
    });
};

deleteMenu(menu: Menu): void {
  this.menuService.deleteMenu(menu)
    .subscribe( data => {
      this.menus = this.menus.filter(u => u !== menu);
    })
};

}
