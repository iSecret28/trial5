import { Component, OnInit } from '@angular/core';
import { DogInfoService } from 'src/app/services/dog/dog-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DogInfo } from 'src/app/services/dog/dog';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-dog-info',
  templateUrl: './dog-info.page.html',
  styleUrls: ['./dog-info.page.scss'],
})
export class DogInfoPage implements OnInit {
  
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
      // if the file doesn't exists, return to home page
      if (!petInfo) {
        this.router.navigate(['/dog-home']);
      } else {
        this.petInfo = petInfo;
      }
    });
  }

}
