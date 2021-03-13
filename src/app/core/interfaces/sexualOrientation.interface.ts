export interface SexualOrientationInterface {

  userId:              number;
  interesthomo:        boolean;
  interesthetero:      boolean;
  interestbi:          boolean;
  sexualorientation:   string;
}

export interface ResponseSexualOrientationInterfacePost {
  returnMessage:    string;
}
export interface ResponseSexualOrientationInterfaceGet {
  returnMessage:    string;
}
