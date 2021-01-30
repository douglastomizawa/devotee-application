import { ProfileService } from './profile.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProfileService {
  profile = new EventEmitter();
  profileUser;

  constructor(
    private profileAPI: ProfileService,
  ) { }

  getProfileInfos(userId): any {
    this.profileAPI.get(userId).toPromise().then(res => {
      if (res) {
        this.profile.emit(res);
        this.profileUser = res;
      }
    });
  }
}
