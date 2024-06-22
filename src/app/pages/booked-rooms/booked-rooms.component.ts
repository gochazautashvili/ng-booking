import { Component } from '@angular/core';
import { BookingsService } from '../../services/bookings.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booked-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booked-rooms.component.html',
  styleUrl: './booked-rooms.component.scss',
})
export class BookedRoomsComponent {
  booked: any[] = [];

  constructor(private bookAPI: BookingsService) {
    this.getBookedRooms();
  }

  getBookedRooms() {
    this.bookAPI.getBookedRooms().subscribe((book: any) => {
      this.booked = book;
    });
  }

  deleteBook(id: string) {
    this.bookAPI.deleteBookedRoom(id).subscribe((data) => {
      alert(data);
      this.getBookedRooms();
    });
  }
}
