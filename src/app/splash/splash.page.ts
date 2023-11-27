import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  lottieoptions: AnimationOptions = {
    path:'assets/dogstep.json'
  }

  constructor(private router:Router) {
    setTimeout(() => {
      this.router.navigateByUrl('login');
    }, 3000);
   }

  ngOnInit() {
  }

}
