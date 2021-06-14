import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dimdian',
  templateUrl: './dimdian.page.html',
  styleUrls: ['./dimdian.page.scss'],
})
export class DimdianPage implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  openIMG(){
    if(document.getElementById('oImg').style.display = "none")
      {document.getElementById('oImg').style.display = "block";}
    
    // if(document.getElementById('oImg').style.display = "block")
    //   {document.getElementById('oImg').style.display = "none";}
  }
  open2IMG(){
    if(document.getElementById('oImg2').style.display = "none")
      document.getElementById('oImg2').style.display = "block";
    else if(document.getElementById('oImg2').style.display = "block")
      document.getElementById('oImg2').style.display = "none";
  }
  // 記住地點：將地址回傳至local storage
  label(){
    var address = $('#address').text()
    console.log(address)
    for (var i = 0, len = localStorage.length; i < len; i++) {
      if (localStorage.getItem('test'+i) == address) {
        alert('此地點已存在。');
        break;
      } 
      else {
        alert('已記住地點！');
        localStorage.setItem(('test'+(localStorage.length-1)), address);
      }
    }   
  }

}
