import { AnimationOptions } from 'ngx-lottie';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { ProfileUser } from '../models/user';
import { Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import Swiper from 'swiper';
import { DogInfoService } from '../services/dog/dog-info.service';
import { DogInfo } from '../services/dog/dog';
import { Observable, Subscription, subscribeOn } from 'rxjs';
import { CatInfo } from '../services/cat/cat';
import { CatInfoService } from '../services/cat/cat-info.service';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DogAddPage } from '../breeds/dog/dog-add/dog-add.page';
import { CatAddPage } from '../breeds/cat/cat-add/cat-add.page';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('swiper', { static: false }) swiperRef: ElementRef | undefined;
  private swiper: Swiper | undefined;
  swiperModules = [IonicSlides];

  lottieoptions: AnimationOptions = {
    path:'assets/cutedog.json'
  }
  isLoading = true;
  user$ = this.userService.currenUs$;
  sub1= Subscription;
  selectedSegment: string = '1';
  public dogInfo: Observable<DogInfo[]>;
  public catInfo: Observable<CatInfo[]>;
  public searchdog: Observable<DogInfo[]>;
  public search : string = '';

  segmentChanged() {
    // You can perform actions when the segment changes here if needed.
    // For example, fetch data based on the selected segment.
  }
  

  servicesSlide: any[] = [
    { title: 'Vaccination', img: '/assets/Services/vacc.jpg' },
    { title: 'Deworming', img: '/assets/Services/deworm.jpg' },
    { title: 'Consultation', img: '/assets/Services/consult.jpg' },
    { title: 'Confinement', img: '/assets/Services/confine.jpg' },
    { title: 'Surgeries', img: '/assets/Services/surg.jpg' },
    { title: 'Pet Boardin', img: '/assets/Services/board.jpg' },
    { title: 'Grooming', img: '/assets/Services/grooming.jpg' },
    { title: 'Home Services', img: '/assets/petbg2.jpg' },
    { title: 'Laboratory', img: '/assets/Services/lab.jpg' },
    { title: 'Direct Microscopy', img: '/assets/Services/micro.jpg' },
    { title: 'Ultrasound', img: '/assets/Services/ultrasound.jpg' },
    { title: 'Urine Analysis', img: '/assets/Services/urine.jpg' },
    { title: 'Complete Blood Chemistry', img: '/assets/Services/complete.jpg' },

  ];

  constructor(
    private userService:UserService,
    private router:Router,
    private dogservice:DogInfoService,
    private catservice:CatInfoService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private sanitizer : DomSanitizer
  ) { 
    this.dogInfo = this.dogservice.getDogInfoAlphabetically();
    this.catInfo = this.catservice.getCatInfoAlphabetically();
  }

  onDogSearch(){
    const searchlower = this.search.trim().toLowerCase();
    console.log('Search: ', searchlower);

    if (searchlower !== ''){
      this.searchdog = this.dogservice.searchDog(searchlower);
    } else{
      this.searchdog = null;
      this.search = '';
    }
    
  }
  
  ngOnInit() {
    
    
  }

  onClick(){
    this.router.navigate(['/pet-detail']);
  }

  async openNewDogModal() {
    const modal = await this.modalController.create({
      component: DogAddPage,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  async openNewCatModal() {
    const modal = await this.modalController.create({
      component: CatAddPage,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }


}
