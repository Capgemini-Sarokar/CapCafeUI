import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

export interface Tile {
  imageUrl: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {

  private innerWidth: number;
  private innerHeight: number;
  private gridColumns: number;
  private gridRowHeight: number;

  private logoScreenTop: number;

  private tiles: Array<Tile>;
  private foodImageUrls: Array<string>;

  private source = interval(2000);
  private subscription: Subscription;

  constructor() {
    this.tiles = new Array<Tile>();
    this.foodImageUrls = new Array<string>();
    this.innerWidth = this.innerHeight = this.gridColumns = this.gridRowHeight = this.logoScreenTop = 0;
    this.gridRowHeight = 150;
  }

  ngOnInit() {
    this.loadImages();
    this.doFollowingWindowResize();
    this.subscription = this.source.subscribe(val => this.randomizeImageUrls());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.doFollowingWindowResize();
  }

  resetTiles(): void {
    delete this.tiles;
    this.tiles = new Array<Tile>();
  }

  randomizeImageUrls(): void {
    this.tiles[random(0, this.tiles.length-1)].imageUrl = this.foodImageUrls[random(0, this.foodImageUrls.length-1)];
  }

  doFollowingWindowResize(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight - document.getElementsByTagName("app-navbar")[0].getBoundingClientRect().height;
    this.gridColumns = setGridColumns(this.innerWidth, this.innerHeight);
    this.logoScreenTop = document.getElementsByTagName("app-navbar")[0].getBoundingClientRect().height;
    this.resetTiles();
    for (let i = 1; i <= this.gridColumns * (this.innerHeight / this.gridRowHeight); i++) {
      let temp: Tile = { imageUrl: this.foodImageUrls[random(0, this.foodImageUrls.length-1)] };
      this.tiles.push(temp);
    }
  }

  loadImages(): void {
    this.foodImageUrls.push("./assets/Images/a.jpg");
    this.foodImageUrls.push("./assets/Images/b.jpg");
    this.foodImageUrls.push("./assets/Images/c.jpg");
    this.foodImageUrls.push("./assets/Images/d.jpg");
    this.foodImageUrls.push("./assets/Images/e.jpeg");
    this.foodImageUrls.push("./assets/Images/f.jpeg");
    this.foodImageUrls.push("./assets/Images/g.jpeg");
    this.foodImageUrls.push("./assets/Images/h.jpg");
    this.foodImageUrls.push("./assets/Images/i.jpg");
    this.foodImageUrls.push("./assets/Images/j.jpg");
    this.foodImageUrls.push("./assets/Images/k.jpg");
    this.foodImageUrls.push("./assets/Images/l.jpg");
    this.foodImageUrls.push("./assets/Images/m.jpg");
  }
}

function setGridColumns(width: number, height: number): number {
  if (width < height) {
    if (width <= 360) {
      return 2;
    } else if (width <= 500) {
      return 4;
    } else {
      return 5;
    }
  } else {
    if (width <= 500) {
      return 5;
    } else if (width <= 1024) {
      return 6;
    } else {
      return 8;
    }
  }
}

function random(rangeStart: number, rangeEnd: number): number {
  let min = Math.ceil(rangeStart);
  let max = Math.floor(rangeEnd);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}