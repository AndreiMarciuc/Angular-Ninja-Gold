import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }
  farm(){
    let randomnumb =Math.trunc(Math.random()*(4)+2)
    this._dataService.addGold(randomnumb);
    this._dataService.addActivities("You've earned "+randomnumb+" gold at the Farm")
    console.log(randomnumb);
  }
  cave(min,max){
    let randomnumb=Math.trunc(Math.random()*(10-5+1)+5)
    this._dataService.addGold(randomnumb);
    this._dataService.addActivities("You've earned "+randomnumb+" gold at the Cave")
    console.log(randomnumb, 'in cave')
  }
  casino() {
    let randomnumb = Math.trunc(Math.random() * (200)-100);
    this._dataService.addGold(randomnumb);
    if (randomnumb>= 0){
      this._dataService.addActivities("You've  won " +randomnumb+ " gold at the Casino.");
    }
    else{
      this._dataService.addActivities(" You've  lost " + randomnumb + " gold at the Casino.");
    }
    console.log(randomnumb)
  }
  house(min,max){
    let randomnumb=Math.trunc(Math.random()*(15-7+1)+7)
    this._dataService.addGold(randomnumb);
    this._dataService.addActivities("You've earned "+randomnumb+" gold at the House")
    console.log(randomnumb, 'in house')
  }
}
