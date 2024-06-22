import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface FilterDatePropType {
  roomTypeId: number;
  priceFrom: number;
  priceTo: number;
  maximumGuests: number;
  checkIn: string;
  checkOut: string;
}

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private http: HttpClient) {}

  getRoomById(id: string) {
    return this.http.get(
      `https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`
    );
  }

  getAllRoom() {
    return this.http.get(
      'https://hotelbooking.stepprojects.ge/api/Rooms/GetAll'
    );
  }

  getRoomTypes() {
    return this.http.get(
      'https://hotelbooking.stepprojects.ge/api/Rooms/GetRoomTypes'
    );
  }

  getAllRoomsByHotelsId(id: string) {
    return this.http.get(
      `https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`
    );
  }

  getFIlteredRooms({
    roomTypeId,
    priceFrom,
    priceTo,
    maximumGuests,
    checkIn,
    checkOut,
  }: FilterDatePropType) {
    return this.http.post(
      'https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered',
      {
        roomTypeId,
        priceFrom,
        priceTo,
        maximumGuests,
        checkIn,
        checkOut,
      }
    );
  }
}
