import { Component, OnInit } from '@angular/core';
import { CatInfo } from 'src/app/services/cat/cat';
import { CatInfoService } from 'src/app/services/cat/cat-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cat-info',
  templateUrl: './cat-info.page.html',
  styleUrls: ['./cat-info.page.scss'],
})
export class CatInfoPage implements OnInit {

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
      // if the file doesn't exists, return to home page
      if (!petInfo) {
        this.router.navigate(['/dog-home']);
      } else {
        this.petInfo = petInfo;
      }
    });
  }


}
