import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Swiper } from 'swiper';
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  @ViewChild('swiper', { static: false }) swiperRef: ElementRef | undefined;
  private swiper: Swiper | undefined;

  constructor() {}

  ngOnInit() {}

  titles = [
    {
      url: '/assets/onboarding/dog_pizza.jpg',
      message: '🚑 Learn essential life-saving techniques. 🚑',
    },
    {
      url: '/assets/onboarding/dog_pizza.jpg',
      message: '🌱 Discover the Healing Power of Nature! 🌱',
    },
    {
      url: '/assets/onboarding/dog_pizza.jpg',
      message: '💡 Quick tips for easy recall during emergencies 💡',
    },
  ];
}
