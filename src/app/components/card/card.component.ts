import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ICard } from '../../models/card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  cardInfo = input.required<ICard>();
}
