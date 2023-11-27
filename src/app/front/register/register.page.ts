import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { switchMap, tap } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  showPassword: boolean = false;
  credentials : FormGroup;

  constructor(private toast : ToastController,
    private route: Router ,private fb : FormBuilder,private auth:AuthService,private userService:UserService) { }
  
  // get the form value 
  get firstname(){
    return this.credentials.get('firstname');
  }
  get lastname(){
    return this.credentials.get('lastname');
  }
  get email(){
    return this.credentials.get('email');
  }
  get password(){
    return this.credentials.get('password');
  }
  get phone(){
    return this.credentials.get('phone');
  }
  get country(){
    return this.credentials.get('country');
  }
  get postal(){
    return this.credentials.get('postal');
  }
  get region(){
    return this.credentials.get('region');
  }
  get city(){
    return this.credentials.get('city');
  }
  
  ngOnInit() {
    //form validation
    this.credentials = this.fb.group({
      firstname: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]],
      lastname:[''],
      phone:[''],
      country:[''],
      postal:[''],
      region:[''],
      city:[''],
      streetadd:['']
		})
  }

  submit(){
    const { email, password, firstname,lastname,phone,country,postal,region,city,streetadd } = this.credentials.value;
    
    this.auth.signup(email,password).pipe(
      switchMap(({ user: {uid} }) =>
      this.userService.addUser({
        uid, email, firstname, password,lastname,phone,country,postal,region,city,streetadd 
      })
      ),
    ).subscribe(()=>{
      this.showtoast('registered success');
      this.route.navigate(['/home']);
    })
  }

  login(){
    this.route.navigate(['/login'])
  }

  async showtoast(message){
    const toast = await this.toast.create({
      message,
      duration: 2000,
      position: 'middle'
    });
    await toast.present();
  }

  togglePasswordVisibility() {
		this.showPassword = !this.showPassword;
	  }
}
