import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  Activities:Array<string>;
  constructor(private _dataService: DataService) { 
    this._dataService.ActivityObserver.subscribe(Activities=>{
      this.Activities = Activities;
    });
  }

  ngOnInit() {
  }

}
