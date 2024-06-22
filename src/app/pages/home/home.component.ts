import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoomsService } from '../../services/rooms.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  rooms: any[] = [];
  loading: boolean = false;

  constructor(private roomAPI: RoomsService) {
    this.getRooms();
  }

  getRooms() {
    this.loading = true;
    this.roomAPI.getAllRoom().subscribe((data: any) => {
      this.rooms = data.slice(0, 6);
      this.loading = false;
    });
  }
}
