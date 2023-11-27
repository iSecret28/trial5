import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  
	credentials: FormGroup;
	showPassword: boolean = false;
	constructor(
		private fb: FormBuilder,
		private loadingController: LoadingController,
		private alertController: AlertController,
		private authService: AuthService,
		private router: Router
	) {}

	// Easy access for form fields
	get email() {
		return this.credentials.get('email');
	}
	get password() {
		return this.credentials.get('password');
	}
	

	ngOnInit() {
		this.credentials = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});
	}

	login() {
		const {email,password} = this.credentials.value;
		this.authService.login(email,password).pipe(
		)
		.subscribe(() =>{
			this.router.navigate(['/home']);
		});
	}
	async showAlert(header, message) {
		const alert = await this.alertController.create({
			header,
			message,
			buttons: ['OK']
		});
		await alert.present();
	}
	
	togglePasswordVisibility() {
		this.showPassword = !this.showPassword;
	  }
	async signup(){
		const loading = await this.loadingController.create();
		await loading.present();
		this.router.navigate(['/register']);
		await loading.dismiss();
	}
}