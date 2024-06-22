import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  constructor(private http: HttpClient) {}

  getBookedRooms() {
    return this.http.get('https://hotelbooking.stepprojects.ge/api/Booking');
  }

  bookRoom(data: any) {
    return this.http.post(
      'https://hotelbooking.stepprojects.ge/api/Booking',
      data,
      { responseType: 'text' }
    );
  }

  deleteBookedRoom(id: string) {
    return this.http.delete(
      `https://hotelbooking.stepprojects.ge/api/Booking/${id}`,
      { responseType: 'text' }
    );
  }
}
