export interface LikeDeslikeInterface {
  user_id:          number;
  receive_id:       number;
}

export interface ResponseLikeDeslikeInterface {
  user_id:          number;
  photo_user_id:    string;
  receive_id:       number;
  photo_receive_id: string;
  status:           boolean;
  notify:           boolean;
}
