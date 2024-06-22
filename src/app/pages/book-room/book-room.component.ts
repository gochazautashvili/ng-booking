import { Component } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-book-room',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-room.component.html',
  styleUrl: './book-room.component.scss',
})
export class BookRoomComponent {
  public room: any = null;
  public bookData = {
    roomID: '',
    checkInDate: '',
    checkOutDate: '',
    customerName: '',
    customerPhone: '',

    id: 0,
    totalPrice: 0,
    isConfirmed: true,
    customerId: 'string',
  };

  constructor(
    private roomAPI: RoomsService,
    private route: ActivatedRoute,
    private bookAPI: BookingsService,
    private router: Router
  ) {
    route.params.subscribe((params: any) => {
      roomAPI.getRoomById(params.roomId).subscribe((data) => {
        this.room = data;
      });
    });
  }

  handleSubmit() {
    this.bookData.roomID = this?.room?.id;

    this.bookAPI.bookRoom(this.bookData).subscribe((data) => {
      alert(data);
    });
  }
}
