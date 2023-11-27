import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DogInfoService } from 'src/app/services/dog/dog-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DogInfo } from 'src/app/services/dog/dog';
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from '@angular/fire/storage';
@Component({
  selector: 'app-dog-update',
  templateUrl: './dog-update.page.html',
  styleUrls: ['./dog-update.page.scss'],
})
export class DogUpdatePage implements OnInit {
  public petInfo: DogInfo;
  updatepetInfoForm: FormGroup;
  formIsEdited: boolean = false;
  loading = false;
  sub1: Subscription;
  sub2: Subscription;

  @ViewChild('updateForm') updateForm: FormGroupDirective;

  constructor(
    private petinfoservice: DogInfoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.sub1 = this.petinfoservice.getDogInfotById(id).subscribe((petInfo) => {
      // if the petInfo doesn't exists, return to home page
      if (!petInfo) {
        this.router.navigate(['/dog-home']);
      } else {
        this.petInfo = petInfo;

        this.updatepetInfoForm = new FormGroup({
          'name': new FormControl(this.petInfo.name),
          'desc': new FormControl(this.petInfo.desc),
          'petphoto': new FormControl(this.petInfo.petphoto),
        });

        this.sub2 = this.updatepetInfoForm.valueChanges.subscribe((values) => {
          this.formIsEdited = true;
        });
      }
    });
  }

  submitForm() {
    this.updateForm.onSubmit(undefined);
  }

  updatepetInfo(values: any) {
    values.name = values.name.toLowerCase();
    // copy all the form values into the petInfo to be updated
    let updatedpetInfo: DogInfo = { id: this.petInfo.id, ...values };

    this.petinfoservice
      .updateDogInfo(updatedpetInfo)
      .then((res) => this.router.navigate(['/home/']));
  }

  deletepetInfo(petInfoId: string) {
    this.petinfoservice
      .deleteDogInfo(petInfoId)
      .then((res) => this.router.navigate(['/home/']));
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

  onPhotoSelected(event: any) {
    const storage = getStorage();
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const filePath = `dog_photos/${file.name}`;
      const storageRef = ref(storage, filePath);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Set loading to true when starting the upload
      this.loading = true;

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle upload progress
          // You can log the progress in the console if needed
        },
        (error) => {
          // Handle upload error
          console.error('Upload Error:', error);
          this.loading = false; // Set loading to false on error
        },
        () => {
          // Upload complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            this.updatepetInfoForm.patchValue({ petphoto: downloadURL });
            this.loading = false; // Set loading to false on successful upload
          });
        }
      );
    }
  }
  
}
