import { Component } from '@angular/core';

@Component({
  selector: 'demo-carousel-multilist',
  templateUrl: './multilist.html',
  styles: [`
  ::ng-deep a.carousel-control-prev, a.carousel-control-prev:hover {left:-7% !important;}
  ::ng-deep .carousel-control-next, .carousel-control-next:hover {right:-8% !important;}
  slide{margin:5px;}
  .carousel-caption{position:relative; text-align: center; padding: 15px 0 0 0; bottom: 0;}
  `]
})
export class DemoCarouselMultilistComponent {
  itemsPerSlide = 4;
  singleSlideOffset = false;
  noWrap = false;

  slidesChangeMessage = '';

  slides = [
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg'}
  ];

  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }
}
