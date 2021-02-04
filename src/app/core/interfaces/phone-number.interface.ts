export interface ResponsePhoneNumberInterface {
  countRecords: number,
  data:         UserInfos
}

export interface UserInfos {
  userId:      number,
  email:       string,
  phone:       number,
  privacy:     string,
  updated:     number
}
