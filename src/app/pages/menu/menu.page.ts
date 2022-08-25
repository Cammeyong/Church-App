import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {


  pages: [
    {
      url: '/events';
    label: 'Events';
  },
    {
      url: '/events';
    label: 'Sermon';
  }

  ];

  selectedPath= '';
  constructor(private routes: Router) {
    this.routes.events.subscribe((event: RouterEvent)=>{
      if(event && event.url) {
        this.selectedPath = event.url;
      }
    });
  };

  ngOnInit() {
  }

}
