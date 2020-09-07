export interface LoginInterface {
    email:    string;
    password: string;
}

export interface ResponseLoginInterface {
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
    user_type:            string;
    birthdate:            string;
    fertile:              string;
    prejudice:            string;
    born_with_disability: string;
    preference_distance:  string;
    profession:           string;
    tokenNotification:    string;
    deviceType:           string;
    date_created:         string;
    lat:                  string;
    lon:                  string;
    interesthomo:         string;
    interestbi:           string;
    interesthetero:       string;
    sexualorientation:    string;
    genderborn:           string;
    tiic:                 string;
    interestsex:          string;
    interestfriend:       string;
    interestrelation:     string;
    status:               boolean;
    profile_image:        string;
}