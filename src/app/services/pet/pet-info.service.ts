import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Firestore, collectionData, collection, doc, setDoc, deleteDoc, docSnapshots } from '@angular/fire/firestore';
import { petInfo } from 'src/app/services/pet/pet';

@Injectable({
  providedIn: 'root'
})
export class PetInfoService{

  constructor(private firestore: Firestore) {}

  getPetInfo(): Observable<petInfo[]> {
    const infoCollection = collection(this.firestore, 'petinfo');
    // this method returns a stream of documents mapped to their payload and id
    return collectionData(infoCollection, {idField: 'id'})
    .pipe(
      map(info => info as petInfo[])
    );
  }

  getPetInfotById(id: string): Observable<petInfo> {
    const document = doc(this.firestore, `petinfo/${id}`);
    return docSnapshots(document)
    .pipe(
      map(doc => {
        const id = doc.id;
        const data = doc.data();
        return { id, ...data } as petInfo;
      })
    );
  }
  
  createPetInfo(info: petInfo): Promise<void> {
    const document = doc(collection(this.firestore, 'petinfo'));
    return setDoc(document, info);
  }

  updatePetInfo(info: petInfo): Promise<void> {
    const document = doc(this.firestore, 'petinfo', info?.id);
    const { id, ...data } = info; // we don't want to save the id inside the document
    return setDoc(document, data);
  }

  deletePetInfo(id: string): Promise<void> {
    const document = doc(this.firestore, 'petinfo', id);
    return deleteDoc(document);
  }
}
