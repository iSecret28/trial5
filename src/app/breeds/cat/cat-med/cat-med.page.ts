import { Component, OnInit } from '@angular/core';
import { CatInfoService } from 'src/app/services/cat/cat-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CatInfo } from 'src/app/services/cat/cat';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cat-med',
  templateUrl: './cat-med.page.html',
  styleUrls: ['./cat-med.page.scss'],
})
export class CatMedPage implements OnInit {

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
      // if the contact doesn't exists, return to home page
      if (!petInfo) {
        this.router.navigate(['/cat-home']);
      } else {
        this.petInfo = petInfo;
      }
    });
  }

}
