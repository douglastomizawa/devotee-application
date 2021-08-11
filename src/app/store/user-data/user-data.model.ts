


export interface IProfileDataState{
  user:             UserData;
  originalgender:   string;
  fieldisfertile:   string;
  fielddisability:  string;
  fieldprejudice:   string;
  preference_tags:  PreferenceTag[];
  hospitals:        Hospitals[];
  medication_types: MedicationsTypes[];
  surgeries:        Surgeries[];
  cid:              Cid[];
  album:            Album;
}

export interface Album {
  img1: string;
  img2: string;
  img3: string;
}

export interface Hospitals {
  id:   string;
  name: string;
}

export interface MedicationsTypes {
  id:   string;
  name: string;
}

export interface Surgeries {
  id:   string;
  name: string;
}

export interface Cid {
  id:   string;
  name: string;
}

export interface PreferenceTag {
  preference: string;
}

export interface UserData {
  id:                   string;
  email:                string;
  first_name:           string;
  last_name:            string;
  gender:               string;
  address:              string;
  city:                 string;
  state:                string;
  country:              string;
  zip_code:             string;
  youtube_url:          string;
  about:                string;
  birthdate:            string;
  fertile:              boolean;
  born_with_disability: boolean;
  prejudice:            boolean;
  preference_distance:  string;
  user_type:            string;
  profession:           string;
  lat:                  string;
  lon:                  string;
  interesthomo:         string;
  interestbi:           string;
  interesthetero:       string;
  sexualorientation:    string;
  genderborn:           string;
  tiic:                 string;
  profile_image:        string;
  background_image:     string;
}

export const USER_DATA_INITIAL_STATE:  UserData = {
  id:                   "",
  email:                "",
  first_name:           "",
  last_name:            "",
  gender:               "",
  address:              "",
  city:                 "",
  state:                "",
  country:              "",
  zip_code:             "",
  youtube_url:          "",
  about:                "",
  birthdate:            "",
  fertile:              false,
  born_with_disability: false,
  prejudice:            false,
  preference_distance:  "",
  user_type:            "",
  profession:           "",
  lat:                  "",
  lon:                  "",
  interesthomo:         "",
  interestbi:           "",
  interesthetero:       "",
  sexualorientation:    "",
  genderborn:           "",
  tiic:                 "",
  profile_image:        "",
  background_image:     "",
}
export const PREFERENCE_TAG_INITIAL_STATE = []
export const HOSPITALS_INITIAL_STATE = []
export const MEDICATION_TYPES_INITIAL_STATE = []
export const SURGERIES_INITIAL_STATE = []
export const CID_INITIAL_STATE = []
export const ALBUM_INITIAL_STATE: Album = {
  img1: "",
  img2:"",
  img3:"",
}
export const PROFILE_DATA_INITIAL_STATE:  IProfileDataState = {
  user:             USER_DATA_INITIAL_STATE,
  originalgender:   "",
  fieldisfertile:   "",
  fielddisability:  "",
  fieldprejudice:   "",
  preference_tags:  PREFERENCE_TAG_INITIAL_STATE,
  hospitals:        HOSPITALS_INITIAL_STATE,
  medication_types: MEDICATION_TYPES_INITIAL_STATE,
  surgeries:        SURGERIES_INITIAL_STATE,
  cid:              CID_INITIAL_STATE,
  album:            ALBUM_INITIAL_STATE,
}
