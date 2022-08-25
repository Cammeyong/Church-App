import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  selectedPath: string;

  constructor(private routes: Router, private url: ActivatedRoute)  {
    this.routes.events.subscribe((event: RouterEvent)=>{
      if(event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }
  // onSubmit(path) {
  //   const encoded = encodeURIComponent(path);
  //   this.routes.navigateByUrl(`/events/${encoded}`);
  // }
}


