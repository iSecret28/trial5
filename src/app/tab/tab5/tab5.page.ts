import { Component,OnInit } from '@angular/core';
import { petInfo } from 'src/app/services/pet/pet';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { AddpetPage } from 'src/app/addpet/addpet.page';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { PetInfoService } from 'src/app/services/pet/pet-info.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  user$ = this.userService.currenUs$;
  
  public contacts: Observable<petInfo[]>;

  constructor(private userService : UserService,
    private petinfoService: PetInfoService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet) 
    {
      this.contacts = this.petinfoService.getPetInfo();
    }

  ngOnInit() {
  }
  async addpet() {
    const modal = await this.modalController.create({
      component: AddpetPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    return await modal.present();
  }
}
