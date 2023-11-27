import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { DogInfoService } from 'src/app/services/dog/dog-info.service';
import { DogInfo } from 'src/app/services/dog/dog';

@Component({
  selector: 'app-dog-food',
  templateUrl: './dog-food.page.html',
  styleUrls: ['./dog-food.page.scss'],
})
export class DogFoodPage implements OnInit {

  public petInfo: DogInfo;
  sub1: Subscription;

  constructor(
    private dogservice:DogInfoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.sub1 = this.dogservice.getDogInfotById(id)
    .subscribe(petInfo => {
      // if the contact doesn't exists, return to home page
      if (!petInfo) {
        this.router.navigate(['/dog-home']);
      } else {
        this.petInfo = petInfo;
      }
    });
  }

}
