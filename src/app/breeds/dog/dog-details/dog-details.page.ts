import { Component, OnInit, OnDestroy } from '@angular/core';
import { DogInfoService } from 'src/app/services/dog/dog-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DogInfo } from 'src/app/services/dog/dog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.page.html',
  styleUrls: ['./dog-details.page.scss'],
})
export class DogDetailsPage implements OnInit {

  
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
      if (!petInfo) {
        this.router.navigate(['/dog-home']);
      } else {
        this.petInfo = petInfo;
      }
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}

