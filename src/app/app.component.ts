import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user$ = this.userService.currenUs$;
  constructor(private userService:UserService , private router:Router) {}

  toProfile() {
    this.router.navigate(['/profile']); // Navigate to the "/profile" route
  }

}
