import { Component, OnInit } from '@angular/core';
import { DogInfoService } from 'src/app/services/dog/dog-info.service';
import { DogInfo } from 'src/app/services/dog/dog';
import { Observable } from 'rxjs';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DogAddPage } from '../dog-add/dog-add.page';
import { getFirestore, collection, query, where } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-dog-home',
  templateUrl: './dog-home.page.html',
  styleUrls: ['./dog-home.page.scss'],
})



export class DogHomePage{

  searchTerm: string;
  public petInfo: Observable<DogInfo[]>;

  constructor(private dogservice:DogInfoService,public modalController: ModalController,
    private routerOutlet: IonRouterOutlet) {
     this.petInfo = this.dogservice.getDogInfo();
   }
   
  async openNewContactModal() {
    const modal = await this.modalController.create({
      component: DogAddPage,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }
 
}
export function searchDogsByName(searchTerm: string): Observable<DogInfo[]> {
  const db = getFirestore();
  const dogsRef = collection(db, "dogs");
  const q = query(dogsRef, where("name", ">=", searchTerm));
  return new Observable<DogInfo[]>((observer) => {
    getDocs(q).then((querySnapshot) => {
      const dogs: DogInfo[] = [];
      querySnapshot.forEach((doc) => {
        dogs.push({ id: doc.id, ...doc.data() } as DogInfo);
      });
      observer.next(dogs);
      observer.complete();
    }).catch((error) => {
      observer.error(error);
    });
  });
}