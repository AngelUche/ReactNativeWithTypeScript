interface LocationType {
  longitude: number;
  latitude: number;
}

export type PlaceType = {
  title: string;
  imageUri: string;
  address: string;
  location: LocationType;
  id: string;
};

export class Place implements PlaceType {
  title: string;
  imageUri: string;
  address: string;
  location: LocationType;
  id: string;


  constructor(title: string, imageUri: string, address: string,location: LocationType) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
    this.id=new Date().toString() + Math.random().toString()
  }
}
