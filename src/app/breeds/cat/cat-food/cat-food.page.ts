import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CatInfo } from 'src/app/services/cat/cat';
import { CatInfoService
 } from 'src/app/services/cat/cat-info.service';
@Component({
  selector: 'app-cat-food',
  templateUrl: './cat-food.page.html',
  styleUrls: ['./cat-food.page.scss'],
})
export class CatFoodPage implements OnInit {

  public petInfo: CatInfo;
  sub1: Subscription;

  constructor(
    private catservice:CatInfoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.sub1 = this.catservice.getCatInfotById(id)
    .subscribe(petInfo => {
      if (!petInfo) {
        this.router.navigate(['/dog-home']);
      } else {
        this.petInfo = petInfo;
      }
    });
  }

}
