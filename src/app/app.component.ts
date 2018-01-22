import { Component ,OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = " Ninja Gold"
  Gold: number;

constructor(private _dataService: DataService){
  console.log('in app.component')
  this._dataService.GoldObserver.subscribe(Gold=>{
    this.Gold=Gold
  });

}

  ngOnInit(){

  }
}