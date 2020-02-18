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
    this.foodImageUrls.push("./assets/Images/Food Images/a.jpg");
    this.foodImageUrls.push("./assets/Images/Food Images/b.jpeg");
    this.foodImageUrls.push("./assets/Images/Food Images/c.jpeg");
    this.foodImageUrls.push("./assets/Images/Food Images/d.jpeg");
    this.foodImageUrls.push("./assets/Images/Food Images/e.jpg");
    this.foodImageUrls.push("./assets/Images/Food Images/f.jpg");
    this.foodImageUrls.push("./assets/Images/Food Images/g.jpg");
    this.foodImageUrls.push("./assets/Images/Food Images/h.jpg");
    this.foodImageUrls.push("./assets/Images/Food Images/i.jpg");
    this.foodImageUrls.push("./assets/Images/Food Images/j.jpg");
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