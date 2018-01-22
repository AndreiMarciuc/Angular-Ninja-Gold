import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
@Injectable()
export class DataService {
  Gold: number = 0;
  Activities: Array<string> = [];
  GoldObserver = new BehaviorSubject(this.Gold)
  ActivityObserver = new BehaviorSubject(this.Activities)

  constructor() {
    console.log('in service ')
  }
  retrieveGold(): number {
    return this.Gold;
  }

  addGold(count: number) {
    this.Gold = this.Gold + count;
    this.GoldObserver.next(this.Gold);
  }

  addActivities(activity){
    this.Activities.push(activity);
    this.ActivityObserver.next(this.Activities);
  }


}
