import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Chart, ChartDataSets } from 'chart.js';
import { Colors, Label } from 'ng2-charts';
import { range } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// 11:36
// typings install dt~jquery --save --global

@Component({
  selector: 'app-dimdian',
  templateUrl: './dimdian.page.html',
  styleUrls: ['./dimdian.page.scss'],
})

export class DimdianPage implements OnInit {

  // Data
  chartData: ChartDataSets[] = [
    { data: [], label: 'hihi' }
  ];
  chartData1: ChartDataSets[] = [
    { data: [], label: 'hihi' }
  ];

  // Label
  chartLabel: Label[];

  // Options
  chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: '居住安全級數'
    },
    pan: {
      enabled: true,
      mode: 'xy'
    },
    zoom: {
      enabled: true,
      mode: 'xy'
    }
  };
  chartOptions1 = {
    responsive: true,
    title: {
      display: true,
      text: '車禍事故安全級數'
    },
    pan: {
      enabled: true,
      mode: 'xy'
    },
    zoom: {
      enabled: true,
      mode: 'xy'
    }
  };
  chartColors: Colors[] = [
    {
      borderColor: '#C3E4FA',
      backgroundColor: '#C3E4FA'
    }
  ];

  chartType = 'line';
  showLegend = false;
  // test
  date: string[] = ['清晨', '早晨', '中午', '下午', '傍晚', '夜晚', '深夜'];

  arr = [];
  today = new Date();
  day = this.today.getFullYear() + '.' + (this.today.getMonth() + 1) + '.' + this.today.getDate();
  hour: number = this.today.getHours();

  landmark: string;
  address0: string;

  car: number;
  cartext: string;
  live: number;
  livetext: string;

  historydanger = false;

    // ---------------到時候品然傳給我的數據---------------- //

    prob: number[] = [1, 1, 2, 3, 1, 2, 1]; //車禍事故機率
    prob1: number[] = [3, 3, 1, 1, 1, 2, 1]; //居安事故機率
    peril: number[] = [0, 1, 0, 1, 0, 0, 0]; //今日歷史事故T/F

    // --------------------------------------------------- //

  constructor(private http: HttpClient) {
    this.getData();
    this.getLatitude();
  }

  ngOnInit() {
    this.danger();
    this.getHTTP();
  }

  getHTTP(){
    const url = 'http://localhost:8100';
    this.http.get(url, {observe: 'response', responseType: 'text'}).subscribe((res) => {
    console.log(res);
  });
  }

  danger() {
    const hour = this.hour;
    let hd = this.historydanger;
    console.log(hour);

    if (4 <= hour && hour < 6) {
      if (this.peril[0]) { hd = true; }
      this.car = this.prob[0];
      this.live = this.prob1[0];
    }
    else if (6 <= hour && hour < 10) {
      if (this.peril[1]) { hd = true; }
      this.car = this.prob[1];
      this.live = this.prob1[1];
    }
    else if (10 <= hour && hour < 14) {
      if (this.peril[2]) { hd = true; }
      this.car = this.prob[2];
      this.live = this.prob1[2];
    }
    else if (14 <= hour && hour < 17) {
      if (this.peril[3]) { hd = true; }
      this.car = this.prob[3];
      this.live = this.prob1[3];
    }
    else if (17 <= hour && hour < 20) {
      if (this.peril[4]) { hd = true; }
      this.car = this.prob[4];
      this.live = this.prob1[4];
    }
    else if (20 <= hour && hour < 24) {
      if (this.peril[5]) { hd = true; }
      this.car = this.prob[5];
      this.live = this.prob1[5];
    }
    else if (0 <= hour && hour < 4) {
      if (this.peril[6]) { hd = true; }
      this.car = this.prob[6];
      this.live = this.prob1[6];
    }

    //品然會回傳歷史機率是否危險
    if (hd) {
      $('#history').show('fast');
    }

    switch (this.car) {
      case 1: { //安全
        $('.cara').attr('color', 'success');
        $('.cara').css('color', 'green');
        $('#img1').show('fast');
        this.cartext = '此地點車禍級數低，台北低低弄！';
        break;
      }
      case 2: { //
        $('.cara').attr('color', 'primary');
        $('.cara').css('color', '#0D7FDB');
        $('#img2').show('fast');
        this.cartext = '此地點車禍級數中，小心中路殺出三寶';
        break;
      }
      case 3: { //
        $('.cara').css('color', 'red');
        $('.cara').attr('color', 'danger');
        $('#img3').show('fast');
        this.cartext = '此地點車禍級數高，出門小心！';
        break;
      }
    }

    switch (this.live) {
      case 1: { //安全
        $('.livea').attr('color', 'success');
        $('.livea').css('color', 'green');
        $('#img11').show('fast');
        this.livetext = '此地點居住危險級數低，你很安全！';
        break;
      }
      case 2: { //
        $('.livea').attr('color', 'primary');
        $('.livea').css('color', '#0D7FDB');
        $('#img12').show('fast');
        this.livetext = '此地點居住危險級數中，出門記得要上鎖';
        break;
      }
      case 3: { //
        $('.livea').css('color', 'red');
        $('.livea').attr('color', 'danger');
        $('#img13').show('fast');
        this.livetext = '此地點居住危險級數高，小心安全！';
        break;
      }
    }
  }

  getLatitude() {
    // 宣告緯度
    // const NCU = ['中央大學', '桃園市中壢區中大路300號'];
    // localStorage.setItem('12345678', JSON.stringify(NCU));
// "0625.89,0000.11"
// "12345.88,2234.88"

    const latitude = '"0625.89,0000.11"';    // 品然傳給我緯度，我給dimdian地標地址
    const lati = JSON.parse(localStorage.getItem(latitude));
    // console.log(lati[0]);
    this.landmark = lati[0];
    this.address0 = lati[1];
  }

  getData() {
    this.chartData[0].data = this.prob1;
    this.chartLabel = this.date;
    this.chartData1[0].data = this.prob;

    // // for(let entry of input)
    // for(let i=0;i<=7; i++) {
    //   this.chartData[0].data.push();
    // }

    // console.log(this.day);
  }

  // 按鈕控制
  open2IMG() {
    if (document.getElementById('oImg2').style.display === 'none') { document.getElementById('oImg2').style.display = 'block'; }
    else if (document.getElementById('oImg2').style.display === 'block') { document.getElementById('oImg2').style.display = 'none'; }
  }
  openIMG() {
    if (document.getElementById('oImg').style.display === 'none') { document.getElementById('oImg').style.display = 'block'; }
    else if (document.getElementById('oImg').style.display === 'block') { document.getElementById('oImg').style.display = 'none'; }
  }

  // 記住地點：將地址回傳至local storage

  label() {
    // this.array.push(localStorage.getItem('fav'));
    const fav = JSON.parse(localStorage.getItem('fav'));
    const len = fav.length;
    // console.log(fav[0]);

    for (let i = 0; i < len; i++) {
      this.arr.push(fav[i]);
    }

    const address = $('#address').text();
    // console.log(address);
    if (this.arr.includes(address)) {
      alert('此地點已存在。');
      // break;
    }
    else {
      alert('已記住地點！');
      // localStorage.setItem(('fav' + (localStorage.length - 1)), address);
      this.arr.push(address);
      localStorage.setItem('fav', JSON.stringify(this.arr));
    }
  }

}
