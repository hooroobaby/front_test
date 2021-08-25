import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import $ from "jquery";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Swiper,
} from 'swiper/core';
import * as $ from 'jquery';
import { WeekDay } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})


export class TimePage implements OnInit {

  // 星期日期
  // Today = new Date();
  // year: number = this.Today.getFullYear();
  // month: number = this.Today.getMonth() + 1;
  // day: number = this.Today.getDate();
  // d: number = this.Today.getDay(); //星期幾數字
  week: string; //星期幾中文
  hour: number = new Date().getHours();
  days = [];
  nows = [false,false,false,false,false,false,false,false];
  hours =['04-06','06-10','10-14','14-17','17-20','20-00','00-04'];
  // i: number;
  // num: number = -3;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.showDay();
    this.getHTTP();
  }

  getHTTP(){
    const url = 'http://localhost:8100';
    this.http.get(url, {observe: 'response', responseType: 'text'}).subscribe((res) => {
    console.log(res);
  });
  }

  showDay() {
    const hour = this.hour;
    const nows=this.nows;
    console.log(hour);
    if(4<=hour && hour<6){this.week='清晨'; nows[0]=true;}
    else if(6<=hour && hour<10){this.week='早晨'; nows[1]=true;}
    else if(10<=hour && hour<14){this.week='中午'; nows[2]=true;}
    else if(14<=hour && hour<17){this.week='下午'; nows[3]=true;}
    else if(17<=hour && hour<20){this.week='傍晚'; nows[4]=true;}
    else if(20<=hour && hour<24){this.week='夜晚'; nows[5]=true;}
    else if(0<=hour && hour<4){this.week='深夜'; nows[6]=true;}
    // 正中間為當天日期
    // for (this.i = this.num; this.i <= 3; this.i++) {
    //   this.days.push(this.month + "/" + (this.day + this.i));
    // }
    // console.log(this.d)

    // let nod = [1,2,3,4,5,6,7]
    // let dow = ['清晨','早晨','中午','下午','傍晚','夜晚','深夜'];

    // for (let i = 0; i < nod.length; i++) {
    //   // const element = array[index];
    //   switch(this.d){
    //     case nod[i]:{
    //       this.week=dow[i];
    //       break;
    //     }
    //   }
    // }
    // const days = [this.i - 3, this.i - 2, this.i - 1, this.i, this.i + 1, this.i + 2, this.i + 3];
    // const date = [];
    // days.forEach(function(day){
    //   date.push((new Date().getMonth() + 1) + "/" + day);
    // });
    // console.log(date[0])
  }
  onSwiper(swiper) {
    if(this.nows[0]){swiper.$wrapperEl[0].attributes[4].value = 'transition-duration: 300ms; transform: translate3d(40.2%, 0px, 0px);';}
    if(this.nows[1]){swiper.$wrapperEl[0].attributes[4].value = 'transition-duration: 300ms; transform: translate3d(26%, 0px, 0px);';}
    if(this.nows[2]){swiper.$wrapperEl[0].attributes[4].value = 'transition-duration: 300ms; transform: translate3d(12%, 0px, 0px);';}
    if(this.nows[3]){swiper.$wrapperEl[0].attributes[4].value = 'transition-duration: 300ms; transform: translate3d(-2%, 0px, 0px);';}
    if(this.nows[4]){swiper.$wrapperEl[0].attributes[4].value = 'transition-duration: 300ms; transform: translate3d(-15.6%, 0px, 0px);';}
    if(this.nows[5]){swiper.$wrapperEl[0].attributes[4].value = 'transition-duration: 300ms; transform: translate3d(-30%, 0px, 0px);';}
    if(this.nows[6]){swiper.$wrapperEl[0].attributes[4].value = 'transition-duration: 300ms; transform: translate3d(-44%, 0px, 0px);';}
  }

  onSlideChange(swiper) {
    document.getElementById('icon1').style.color = 'gray';
    document.getElementById('icon2').style.color = 'gray';
    document.getElementById('icon3').style.color = 'gray';
    document.getElementById('icon4').style.color = 'gray';
    document.getElementById('icon5').style.color = 'gray';
    document.getElementById('icon6').style.color = 'gray';
    document.getElementById('icon7').style.color = 'gray';

    document.getElementById('font1').style.color = 'gray';
    document.getElementById('font2').style.color = 'gray';
    document.getElementById('font3').style.color = 'gray';
    document.getElementById('font4').style.color = 'gray';
    document.getElementById('font5').style.color = 'gray';
    document.getElementById('font6').style.color = 'gray';
    document.getElementById('font7').style.color = 'gray';

    console.log('slide change');
    console.log(swiper);
    const slate = swiper.$wrapperEl[0].attributes[4].value;
    // alert(slate);
    // 取得滑動視窗的座標
    const reg = /transform: translate3d\((.+)px,(.+)px,(.+)px\)/;
    // var match = style.match(reg);
    // 取得座標x軸
    const match: any = reg.exec(slate)[1];
    // alert(match)
    const width = swiper.$wrapperEl[0].clientWidth;

    // 以下for chooseDay()，讓user選取的欄位對應day of week
    const dow = ['清晨','早晨','中午','下午','傍晚','夜晚','深夜'];
    const ww = document.getElementById('dayweek');
    // let nod = [1,2,3,4,5,6,0];

    // function chooseDay(choose){
    //   for (let i = 0; i < dow.length; i++) {
    //     // const element = array[index];
    //     switch(new Date(choose).getDay()){
    //       case nod[i]:{
    //         ww.innerHTML=dow[i]; //更改正中間上方為當時段名稱
    //         break;
    //       }
    //     }
    //   }
    // }
    //清晨1
    if (0.36 * width < match && match < 0.5 * width) {
      swiper.$wrapperEl[0].attributes[4].value = 'transition-duration: 300ms; transform: translate3d(40.2%, 0px, 0px);';
      document.getElementById('icon1').style.color = '#0D7FDB';
      document.getElementById('font1').style.color = '#0D7FDB';
      // 更改正中間chip為選擇日期
      // var choose = this.year+"-"+this.month + "-" + (this.day-3)
      // chooseDay(choose);
      ww.innerHTML=dow[0];

      // --------------------------------------------------------------------------------------- //
      // const body = JSON.stringify(this.hours[0]);
      // const url = 'http://localhost:8100';
      // this.http.post<any>(url, body).subscribe(res => {
      //   console.log(res);
      // });
    }
    //早晨2
    else if (0.198 * width < match && match < 0.37 * width) {
      swiper.$wrapperEl[0].attributes[4].value = 'transition-duration: 300ms; transform: translate3d(26%, 0px, 0px);';
      document.getElementById('icon2').style.color = '#0D7FDB';
      document.getElementById('font2').style.color = '#0D7FDB';
      // var choose = this.year+"-"+this.month + "-" + (this.day-2)
      // chooseDay(choose);
      ww.innerHTML=dow[1];
    }
    // 中午3
    else if ((0.0625 * width < match && match < 0.21 * width)) {
      swiper.$wrapperEl[0].attributes[4].value = 'transition-duration: 300ms; transform: translate3d(12%, 0px, 0px);';
      document.getElementById('icon3').style.color = '#0D7FDB';
      document.getElementById('font3').style.color = '#0D7FDB';
      // var choose = this.year+"-"+this.month + "-" + (this.day-1)
      // chooseDay(choose);
      ww.innerHTML=dow[2];
    }
    // 下午4
    else if (-0.08 * width < match && match < 0.085 * width) {
      swiper.$wrapperEl[0].attributes[4].value = 'transition-duration: 300ms; transform: translate3d(-2%, 0px, 0px);';
      document.getElementById('icon4').style.color = '#0D7FDB';
      document.getElementById('font4').style.color = '#0D7FDB';
      // var choose = this.year+"-"+this.month + "-" + (this.day)
      // chooseDay(choose);
      ww.innerHTML=dow[3];
    }
    // 傍晚5
    else if (-0.219 * width < match && match < -0.055 * width) {
      swiper.$wrapperEl[0].attributes[4].value = 'transition-duration: 300ms; transform: translate3d(-15.6%, 0px, 0px);';
      document.getElementById('icon5').style.color = '#0D7FDB';
      document.getElementById('font5').style.color = '#0D7FDB';
      // var choose = this.year+"-"+this.month + "-" + (this.day+1)
      // chooseDay(choose);
      ww.innerHTML=dow[4];
    }
    // 晚上6
    else if (-0.35 * width < match && match < -0.197 * width) {
      swiper.$wrapperEl[0].attributes[4].value = 'transition-duration: 300ms; transform: translate3d(-30%, 0px, 0px);';
      document.getElementById('icon6').style.color = '#0D7FDB';
      document.getElementById('font6').style.color = '#0D7FDB';
      // var choose = this.year+"-"+this.month + "-" + (this.day+2)
      // chooseDay(choose);
      ww.innerHTML=dow[5];
    }
    // 深夜7
    else if (-0.498 * width < match && match < -0.345 * width) {
      swiper.$wrapperEl[0].attributes[4].value = 'transition-duration: 300ms; transform: translate3d(-44%, 0px, 0px);';
      document.getElementById('icon7').style.color = '#0D7FDB';
      document.getElementById('font7').style.color = '#0D7FDB';
      // var choose = this.year+"-"+this.month + "-" + (this.day+3)
      // chooseDay(choose);
      ww.innerHTML=dow[6];
    }

    return match;
  }
}
