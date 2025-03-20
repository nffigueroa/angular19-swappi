import {
  Component,
  inject,
  signal,
  computed
} from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { StarwarsService } from '../../services/starwars.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import type { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-films',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LayoutComponent,
    CommonModule,
    CardComponent,
  ],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss',
})
export class FilmsComponent {
  starwarsService = inject(StarwarsService);
  initialFilms = signal<any[]>([]);
  films$: Observable<any> = this.starwarsService.getFilms();
  lookupText = signal<string>('');
  filmsFiltered = computed(() => this.initialFilms().filter((f) =>
    f.properties.title.toLowerCase().includes(this.lookupText().toLocaleLowerCase()),
  ))

  constructor() {
    this.films$.subscribe((films) => this.initialFilms.set(films));
  }
}
