import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Menu} from 'src/app/models/menu.model';
import {MenuService} from './menu.service';

@Component({
    templateUrl: './add-menu.component.html'
})

export class AddMenuComponent{
    menu: Menu = new Menu();

    constructor(private router: Router, private menuService: MenuService){}

    createMenu(): void {
        this.menuService.createMenu(this.menu)
            .subscribe( data => {
              alert("User created successfully.");
            });
    
      };
}
