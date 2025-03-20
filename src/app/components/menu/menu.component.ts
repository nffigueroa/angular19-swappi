import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  routing = [
    {
      label: 'Films',
      redirectTo: '/films',
    },
    {
      label: 'Characters',
      redirectTo: '/character',
    },
  ];
}
