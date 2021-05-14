import { Injectable } from '@angular/core';
import { ResgisterUserInterface } from '../../interfaces/register.interface';
@Injectable({
  providedIn: 'root'
})
export class RegisterUserDefaultService {
  registerUser: ResgisterUserInterface;

  constructor() { }
  returnRegisterUser(dataUserTyped) {
    console.log(dataUserTyped)
    return this.registerUser = {
      first_name: dataUserTyped.first_name,
      last_name :  dataUserTyped.last_name,
      about : '',
      email :  dataUserTyped.email,
      password :  dataUserTyped.password,
      facebook_id : '',
      youtube_url : '',
      gender : '',
      user_type : '',
      address : '',
      state : '',
      country : '',
      zip_code : '',
      fertile : '',
      city : '',
      birthdate : dataUserTyped.birthdate,
      preference_tags : [{gender:[''],typer_user:['']}],
      cid : [''],
      hospitals : [''],
      medication_types : [''],
      surgeries : [''],
      born_with_disability : false,
      prejudice : false,
      preference_distance : 100,
      profession : '',
      genderborn : '',
      tiic : false,
      appleid : ''
    }

  }
}
