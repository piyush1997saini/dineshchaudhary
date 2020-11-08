import { Component } from '@angular/core';
import { ShareService } from './share.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    autoplayHoverPause: true,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
       items: 1
     },
      600: {
       items: 2
     },
      1000: {
       items: 3
     }
    },
   nav: true
  }

  constructor(private share: ShareService){}
  name;
  email;
  mobile;
  message;
  createUser(){
    var data = {name: this.name, email: this.email, mobile: this.mobile, message: this.message}
    this.share.cerateUser(data).subscribe( ()=>{
         alert("Your message sent successfully")
    })
  }
}
