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
    document.getElementById('icon1').style.color="gray"
    document.getElementById('icon2').style.color="gray"
    document.getElementById('icon3').style.color="gray"
    document.getElementById('icon4').style.color="gray"
    document.getElementById('icon5').style.color="gray"
    document.getElementById('icon6').style.color="gray"
    document.getElementById('icon7').style.color="gray"

    document.getElementById('font1').style.color="gray"
    document.getElementById('font2').style.color="gray"
    document.getElementById('font3').style.color="gray"
    document.getElementById('font4').style.color="gray"
    document.getElementById('font5').style.color="gray"
    document.getElementById('font6').style.color="gray"
    document.getElementById('font7').style.color="gray"

    console.log('slide change');
    console.log(swiper);  
    var slate = swiper.$wrapperEl[0].attributes[4].value
    // alert(slate);
    var reg:RegExp = /transform: translate3d\((.+)px,(.+)px,(.+)px\)/
          // var match = style.match(reg);
          let match:any = reg.exec(slate)[1]
          // alert(match)

    let width = swiper.$wrapperEl[0].clientWidth

    //ㄧ
    if(0.36*width<match && match<0.5*width){ 
      swiper.$wrapperEl[0].attributes[4].value="transition-duration: 300ms; transform: translate3d(42.6%, 0px, 0px);"
      document.getElementById('icon1').style.color="#0D7FDB"
      document.getElementById('font1').style.color="#0D7FDB"
    }
    //二
    else if (0.198*width<match && match<0.37*width) {
      swiper.$wrapperEl[0].attributes[4].value="transition-duration: 300ms; transform: translate3d(28.2%, 0px, 0px);"
      document.getElementById('icon2').style.color="#0D7FDB"
      document.getElementById('font2').style.color="#0D7FDB"
    } 
    // 三
    else if (0.0625*width<match && match<0.21*width) {
      swiper.$wrapperEl[0].attributes[4].value="transition-duration: 300ms; transform: translate3d(14.56%, 0px, 0px);"
      document.getElementById('icon3').style.color="#0D7FDB"
      document.getElementById('font3').style.color="#0D7FDB"
    } 
    // 四
    else if (-0.08*width<match && match<0.085*width) {
      swiper.$wrapperEl[0].attributes[4].value="transition-duration: 300ms; transform: translate3d(0.693%, 0px, 0px);"
      document.getElementById('icon4').style.color="#0D7FDB"
      document.getElementById('font4').style.color="#0D7FDB"
    } 
    // 五
    else if (-0.219*width<match && match<-0.055*width) {
      swiper.$wrapperEl[0].attributes[4].value="transition-duration: 300ms; transform: translate3d(-13.6%, 0px, 0px);"
      document.getElementById('icon5').style.color="#0D7FDB"
      document.getElementById('font5').style.color="#0D7FDB"
    } 
    // 六
    else if (-0.35*width<match && match<-0.197*width) {
      swiper.$wrapperEl[0].attributes[4].value="transition-duration: 300ms; transform: translate3d(-27.9%, 0px, 0px);"
      document.getElementById('icon6').style.color="#0D7FDB"
      document.getElementById('font6').style.color="#0D7FDB"
    } 
    // 日
    else if (-0.498*width<match && match<-0.345*width){
      swiper.$wrapperEl[0].attributes[4].value="transition-duration: 300ms; transform: translate3d(-41.76%, 0px, 0px);"
      document.getElementById('icon7').style.color="#0D7FDB"
      document.getElementById('font7').style.color="#0D7FDB"
    }


    return match
  }

}