import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { BookRoomComponent } from './pages/book-room/book-room.component';
import { BookedRoomsComponent } from './pages/booked-rooms/booked-rooms.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'rooms/:id', component: RoomsComponent },
  { path: 'book-room/:roomId', component: BookRoomComponent },
  { path: 'booked-rooms', component: BookedRoomsComponent },
];
