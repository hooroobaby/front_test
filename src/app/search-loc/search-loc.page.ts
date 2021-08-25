import { Component, OnInit } from '@angular/core';


  @Component({
  selector: 'app-search-loc',
  templateUrl: './search-loc.page.html',
  styleUrls: ['./search-loc.page.scss'],
})
export class SearchLocPage implements OnInit {
  // segmentModel = "";
  public sections: any = {
    first: 'first',
    second: 'second',
    selectedSection: 'first'
 };

  constructor() {
  }

  ngOnInit() {
  }

  segmentChanged(event){
    // console.log(this.segmentModel);
    // console.log(event);
  }

  getData(){
    return localStorage.getItem('fav2');
  }

  displayFavLoc() {
    const FavLoc = this.getData();
    document.getElementById('favorite').innerHTML= FavLoc;
    console.log('display finished');
  }

  fillin(){
    console.log('filling');
  }

  nextstep(){
    this.sections.selectedSection = this.sections.second;
  }
}
