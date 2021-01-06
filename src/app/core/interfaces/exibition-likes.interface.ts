export interface ResponseExibitionLikesInterface {
  countRecords: number,
  data:         UserLike[]
}

export interface UserLike {
  user_id:      number,
  receive_id:   number,
  gender:       string

}
