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
      gender : dataUserTyped.gender,
      user_type : '',
      address : '',
      state : '',
      country : '',
      zip_code : '',
      fertile : dataUserTyped.fertile,
      city : '',
      birthdate : dataUserTyped.birthdate,
      preference_tags : [{gender:[''],typer_user:['']}],
      cid : dataUserTyped.cid,
      hospitals : dataUserTyped.hospitals,
      medication_types : dataUserTyped.medication_types,
      surgeries : dataUserTyped.surgeries,
      born_with_disability : dataUserTyped.born_with_disability,
      prejudice : dataUserTyped.prejudice,
      preference_distance : 100,
      profession : '',
      genderborn : '',
      tiic : dataUserTyped.tiic,
      appleid : ''
    }

  }
}
