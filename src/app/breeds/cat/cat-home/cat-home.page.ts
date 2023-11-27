import { Component, OnInit } from '@angular/core';
import { CatInfoService } from 'src/app/services/cat/cat-info.service';
import { CatInfo } from 'src/app/services/cat/cat';
import { Observable } from 'rxjs';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { CatAddPage } from '../cat-add/cat-add.page'

@Component({
  selector: 'app-cat-home',
  templateUrl: './cat-home.page.html',
  styleUrls: ['./cat-home.page.scss'],
})
export class CatHomePage implements OnInit {

  public petInfo: Observable<CatInfo[]>;

  constructor(private catservice:CatInfoService,public modalController: ModalController,
    private routerOutlet: IonRouterOutlet) {

     this.petInfo = this.catservice.getCatInfo();
   }

  async openNewCatInfoModal() {
    const modal = await this.modalController.create({
      component: CatAddPage,
      presentingElement: this.routerOutlet.nativeEl
    });

    return await modal.present();
  }
  ngOnInit() {
  }


}
