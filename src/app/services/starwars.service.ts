import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { map, type Observable } from 'rxjs';
import type { IPeople, IPeopleResponse, IPeopleDetailsResponse } from '../models/card.model';
import { rxResource } from '@angular/core/rxjs-interop';
import { debounceSignal } from './signal-util';

@Injectable({
  providedIn: 'root',
})
export class StarwarsService {
  httpCLient = inject(HttpClient);
  currentPage = signal<number>(1);
  lookupText = signal<string>('')
  lookupTextDebounced = debounceSignal(this.lookupText, 2000)
  charactersList = computed(() => this.characters.value())
  charactersFiltered = computed(() => this.charactersFilter.value())
  paginationStatus = computed(() => this.characters.status())
  filterStatus = computed(() => this.charactersFilter.status())

  private characters = rxResource({
    request: () => ({ page: this.currentPage() }),
    loader: ({ request }) => this.getChracterList(request.page),
  })

  private charactersFilter = rxResource({
    request: () => ({ search: this.lookupTextDebounced() }),
    loader: ({ request }) => this.getCharacterFiltered(request.search),
  })

  previousPage = () => this.currentPage.update(page => page - 1);
  nextPage = () => this.currentPage.update(page => page + 1);

  getFilms(): Observable<any> {
    return this.httpCLient
      .get('https://swapi.tech/api/films')
      .pipe(map((response) => (response as any).result));
  }

  getCharacterById(id: string): Observable<IPeople> {
    return this.httpCLient.get<IPeople>(`https://swapi.tech/api/people/${id}`);
  }

  getChracterList(page?: number): Observable<IPeopleResponse> {
    return this.httpCLient.get<IPeopleResponse>(`https://swapi.tech/api/people?page=${page}&limit=10`);
  }

  getCharacterFiltered(search?: string): Observable<IPeopleDetailsResponse> {
    return this.httpCLient.get<IPeopleDetailsResponse>(`https://swapi.tech/api/people?name=${search}`);
  }

}
