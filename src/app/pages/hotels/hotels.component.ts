import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss',
})
export class HotelsComponent {
  loading: boolean = false;
  hotels: any[] = [];

  constructor(private hotelAPI: HotelsService) {
    hotelAPI.getAllHotel().subscribe((data: any) => {
      this.hotels = data;
    });
  }
}
