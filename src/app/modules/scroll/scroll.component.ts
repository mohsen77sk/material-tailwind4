import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MskScrollbarDirective } from '../../shared/directives/scrollbar/scrollbar.directive';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  imports: [CommonModule, MatButtonModule, MskScrollbarDirective],
})
export class ScrollComponent {
  type = signal(0);
  isCustom = signal(false);
}
