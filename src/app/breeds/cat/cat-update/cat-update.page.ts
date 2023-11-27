import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CatInfoService } from 'src/app/services/cat/cat-info.service';
import { CatInfo } from 'src/app/services/cat/cat';

@Component({
  selector: 'app-cat-update',
  templateUrl: './cat-update.page.html',
  styleUrls: ['./cat-update.page.scss'],
})
export class CatUpdatePage implements OnInit {

  public petInfo: CatInfo;
  updatepetInfoForm: FormGroup;
  formIsEdited: boolean = false;

  sub1: Subscription;
  sub2: Subscription;

  @ViewChild('updateForm') updateForm: FormGroupDirective;

  constructor(
    private petinfoservice: CatInfoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.sub1 = this.petinfoservice.getCatInfotById(id)
    .subscribe(petInfo => {
      // if the petInfo doesn't exists, return to home page
      if (!petInfo) {
        this.router.navigate(['/dog-home']);
      } else {
        this.petInfo = petInfo;

        this.updatepetInfoForm = new FormGroup({
          'name': new FormControl(this.petInfo.name, Validators.required),
          'desc': new FormControl(this.petInfo.desc, Validators.required),
          'orig': new FormControl(this.petInfo.origin, Validators.required),
 
        });

        this.sub2 = this.updatepetInfoForm.valueChanges.subscribe(values => {
          this.formIsEdited = true;
        })
      }
    });
  }

  submitForm() {
    this.updateForm.onSubmit(undefined);
  }

  updatepetInfo(values: any) {
    // copy all the form values into the petInfo to be updated
    let updatedpetInfo: CatInfo = { id: this.petInfo.id, ...values };

    this.petinfoservice.updateCatInfo(updatedpetInfo)
    .then(
      res => this.router.navigate(['/cat-home'])
    );
  }

  deletepetInfo(petInfoId: string) {
    this.petinfoservice.deleteCatInfo(petInfoId)
    .then(
      res => this.router.navigate(['/cat-home'])
    );
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }


}
