import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menu: string = '';

  handleOpenMenu() {
    if (this.menu.trim() == '') {
      this.menu = 'active';
    } else {
      this.menu = '';
    }
  }
}
