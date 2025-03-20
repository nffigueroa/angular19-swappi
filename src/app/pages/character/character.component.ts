import { Component, computed, inject, ResourceStatus, signal } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component'
import { CardComponent } from '../../components/card/card.component';
import { StarwarsService } from '../../services/starwars.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character',
  imports: [LayoutComponent, CardComponent, CommonModule, FormsModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  starwarsService = inject(StarwarsService);
  lookupText = this.starwarsService.lookupText;
  currentPage = this.starwarsService.currentPage;
  charactersList = this.starwarsService.charactersList;
  charactersFiltered = this.starwarsService.charactersFiltered;
  showOnlyDetails = computed(() => this.lookupText().length > 0);
  paginationStatus = this.starwarsService.paginationStatus;
  filterStatus = this.starwarsService.filterStatus;
  previousPage = () => this.starwarsService.previousPage();
  nextPage = () => this.starwarsService.nextPage();
  loading = ResourceStatus.Loading;
}
