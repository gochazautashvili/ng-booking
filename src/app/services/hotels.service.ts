import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  constructor(private http: HttpClient) {}

  getAllHotel() {
    return this.http.get(
      'https://hotelbooking.stepprojects.ge/api/Hotels/GetAll'
    );
  }
}
