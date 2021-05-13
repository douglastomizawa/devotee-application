export interface ResgisterUserInterface {
  first_name: string,
  last_name: string,
  about: string,
  email:string,
  password: string,
  facebook_id:string,
  youtube_url:string,
  gender:string,
  user_type: string,
  address: string,
  state:string,
  country: string,
  zip_code: string,
  fertile: string,
  city: string,
  birthdate:string,
  preference_tags: PreferenceTAG[],
  cid: string[],
  hospitals: string[],
  medication_types: string[],
  surgeries: string[],
  born_with_disability: boolean,
  prejudice: boolean,
  preference_distance: number,
  profession: string,
  genderborn: string,
  tiic: boolean,
  appleid: string
}
export interface PreferenceTAG {
  gender: string[],
  typer_user: string[]
}
export interface ResponseResgisterUserInterface {
  status: boolean,
  message: string,
  id: number
}
