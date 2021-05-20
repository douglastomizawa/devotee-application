export interface HospitalsInterface {
  country : string,
  latitude: number,
  longitude: number
}
export interface ResponseHospitalsInterface {
  id: number,
  name: string,
  codeiso2: string,
  codeiso3: string,
  lat: number,
  lon: number,
  distance: number
}
