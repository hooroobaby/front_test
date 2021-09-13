import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-time',
  templateUrl: './search-time.page.html',
  styleUrls: ['./search-time.page.scss'],
})
export class SearchTimePage implements OnInit {
  public sections: any = {
    location: 'location',
    time: 'time',
    selectedSection: 'location'
 };

  FavValue?: string;
  favList: string[] = this.getArray();

  myDate: string = new Date().toISOString();

  datedisabled: Boolean = false;

  period: string;

  weekday: number;

  outputdata: string;

  // myVar: number = 12; //test_

  // Data: [latitude: string, longitude: string, withdate: Boolean, week: string, period: string];

  constructor(private http: HttpClient) {
  }

  getLevel(){
    const body = {
      a:1
    };
    const url = 'http://localhost:8100/search-time';

    this.http.post<any>(url, body).subscribe(res => {
      console.log(res);
    });
  }


  ngOnInit() {
  }

  segmentChanged(event){
  }

  //turn json in the local storage into array
  getArray(){
    const jsonObject = JSON.parse(localStorage.getItem('fav3'));
    //jsonObject
    console.log(jsonObject);

    const outputArray = [];
    for (const element in jsonObject) {
      if(element!=='0'){
        outputArray.push({
          id: element,
          location: jsonObject[element]
        });
      }
    }
    //array
    console.log(outputArray);
    //json
    const json = JSON.stringify(jsonObject);
    console.log('json: '+json);

    return outputArray;
  }

  //autoinput search bar by clicking chip
  fillin(clicked){
    console.log(clicked);
    this.FavValue = clicked;
  }

  nextstep(){
    this.sections.selectedSection = this.sections.time;
  }

  withoutdate(event){
    this.datedisabled = !this.datedisabled;
    console.log(this.datedisabled);
  }

  toweekday(input: string){
    const thedate = new Date(input);
    const theweekday  = thedate.getDay() + 1;
    return theweekday;
  }

  getlongitude(input: string){
    const longtitude = localStorage.getItem(input);
    return longtitude;
  }

  search(event){
    this.getLevel();
    if(this.FavValue && this.period){
      console.log(this.getlongitude(this.FavValue) + ' ' + this.datedisabled + ' ' + this.toweekday(this.myDate) + ' ' + this.period);
    }
    else if(!this.FavValue){
      alert('請輸入地點');
    }
    else{
      alert('請選擇時段');
    }
  }
}
