import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Firestore, collectionData, collection, doc, setDoc, deleteDoc, docSnapshots } from '@angular/fire/firestore';
import { CatInfo } from './cat';
import { orderBy, query } from 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class CatInfoService {

  constructor(private firestore: Firestore) {}

  getCatInfo(): Observable<CatInfo[]> {
    const infoCollection = collection(this.firestore, 'CatBreed');
    // this method returns a stream of documents mapped to their payload and id
    return collectionData(infoCollection, {idField: 'id'})
    .pipe(
      map(info => info as CatInfo[])
    );
  }

  getCatInfoAlphabetically(): Observable<CatInfo[]> {
    const infoCollection = collection(this.firestore, 'CatBreed');
    // this method returns a stream of documents mapped to their payload and id
    const sortedAlphabetical = query(
      infoCollection,
      orderBy('name')
    );
    return collectionData(sortedAlphabetical, {idField: 'id'})
    .pipe(
      map(info => info as CatInfo[])
    );
  }
  getCatInfotById(id: string): Observable<CatInfo> {
    const document = doc(this.firestore, `CatBreed/${id}`);
    return docSnapshots(document)
    .pipe(
      map(doc => {
        const id = doc.id;
        const data = doc.data();
        return { id, ...data } as CatInfo;
      })
    );
  }
  
  createCatInfo(info: CatInfo): Promise<void> {
    const document = doc(collection(this.firestore, 'CatBreed'));
    return setDoc(document, info);
  }

  updateCatInfo(info: CatInfo): Promise<void> {
    const document = doc(this.firestore, 'CatBreed', info?.id);
    const { id, ...data } = info; // we don't want to save the id inside the document
    return setDoc(document, data);
  }

  deleteCatInfo(id: string): Promise<void> {
    const document = doc(this.firestore, 'CatBreed', id);
    return deleteDoc(document);
  }
}
