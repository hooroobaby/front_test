import { Component, OnInit } from '@angular/core';

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

}
