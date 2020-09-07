export interface ResponseProfileInterface {
    user:             User;
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

export interface User {
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
