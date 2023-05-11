import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataStateService {

  private isServer = false;

  constructor(
    private tstate: TransferState,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.isServer = isPlatformServer(platformId);
  }
  
  checkAndGetData(key: string, observable: Observable<any>) {
    let keyState = makeStateKey<any>(key);
    if (this.tstate.hasKey(keyState) && !this.isServer) {
      return of(this.tstate.get(keyState, []));
    } else {
      return observable;
    }
  }

}