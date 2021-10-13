import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/_service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{

  public flagProgressBar: boolean = true;

  constructor(public route: ActivatedRoute, private loader: LoaderService) {
    this.progresValue = 0;
    this.rangeArray = new Array(100);
  }

  showFiller = false;

  progresValue: number;
  rangeArray: number[];

  title = 'AngularMaterial';

  isLoading = false;

  ngOnInit(): void {
    this.loader.progressBarReactiva.subscribe(data => {
      this.flagProgressBar = data;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const element = document.documentElement, body = document.body, scrollTop = 'scrollTop', scrollHeight = 'scrollHeight';
    this.progresValue = (element[scrollTop] || body[scrollTop]) / ((element[scrollHeight] || body[scrollHeight]) - element.clientHeight) * 100;
  }

  loadBar(): void {
    this.isLoading = true;
    setTimeout(() =>{ this.isLoading = false; }, 800);
  }

}



