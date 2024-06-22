import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RoomsService } from '../../services/rooms.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  public types: any[] = [];
  public rooms: any[] = [];
  public loading: boolean = false;
  public filterDate: any = {
    priceFrom: 0,
    priceTo: 1000,
    roomTypeId: undefined,
    maximumGuests: 1,
    checkIn: undefined,
    checkOut: undefined,
  };

  constructor(private roomAPI: RoomsService, private route: ActivatedRoute) {
    roomAPI.getRoomTypes().subscribe((data: any) => {
      this.types = data;
    });

    route.params.subscribe((params: any) => {
      if (!!params.id) {
        this.getHotelsRoom(params.id);
      } else {
        this.handleFilterRooms();
      }
    });
  }

  getHotelsRoom(id: string) {
    this.roomAPI.getAllRoomsByHotelsId(id).subscribe((data: any) => {
      this.rooms = data.rooms;
    });
  }

  reset() {
    this.loading = true;
    this.filterDate = {
      priceFrom: 0,
      priceTo: 1000,
      roomTypeId: undefined,
      maximumGuests: 1,
      checkIn: undefined,
      checkOut: undefined,
    };

    this.roomAPI.getFIlteredRooms(this.filterDate).subscribe((data: any) => {
      this.rooms = data;
      this.loading = false;
    });
  }

  handleFilterRooms() {
    this.loading = true;
    this.roomAPI.getFIlteredRooms(this.filterDate).subscribe((data: any) => {
      this.rooms = data;
      this.loading = false;
    });
  }

  handlePrice(e: any) {
    this.filterDate.priceTo = e.target.value;
  }

  handleSelect(e: any) {
    this.filterDate.roomTypeId = e.target.value;
  }

  checkIn(e: any) {
    this.filterDate.checkIn = e.target.value;
  }

  checkOut(e: any) {
    this.filterDate.checkOut = e.target.value;
  }
}
