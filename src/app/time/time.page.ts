import { Component, OnInit, ViewChild} from '@angular/core';
// import $ from "jquery";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Swiper,
} from 'swiper/core';
import * as $ from 'jquery';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})


export class TimePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onSwiper(swiper) {
  }
  
  onSlideChange(swiper) {
    console.log('slide change');
    console.log(swiper);  
    var slate = swiper.$wrapperEl[0].attributes[4].value
    // alert(slate);
    var reg:RegExp = /transform: translate3d\((.+)px,(.+)px,(.+)px\)/
          // var match = style.match(reg);
          let match:any = reg.exec(slate)[1]
          alert(match)

    let width = swiper.$wrapperEl[0].clientWidth
    if(0.36*width<match && match<0.5*width){
      alert("3/18")
    }

    return match
  }

}