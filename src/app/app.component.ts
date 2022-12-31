import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { users } from './app.data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list: any;
  onFilterType(event: any) {
    console.log('on filter type ', event);
    if(event === 'all'){
      this.list = users;
    } else {
      const divRecords = users.filter((r: any) => r.profile.type === event);
      this.list = divRecords;
    } 
  }
}
