import { CommonModule } from '@angular/common';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { AfterContentInit, AfterViewInit, Component, signal, viewChild, viewChildren } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MskScrollbarDirective } from '../../shared/directives/scrollbar/scrollbar.directive';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-scroll2',
  templateUrl: './scroll2.component.html',
  imports: [CommonModule, CdkScrollable, MatButtonModule, MskScrollbarDirective],
})
export class Scroll2Component implements AfterContentInit {
  isCustom = signal(false);

  mirrors = viewChildren<CdkScrollable>(CdkScrollable);
  activeScroll: string | null = null;

  ngAfterContentInit(): void {
    console.log(this.mirrors());

    this.mirrors()?.map((mirror) => {
      mirror
        .elementScrolled()
        .pipe(
          map((data) => data.target as HTMLElement),
          filter((target) => {
            if (this.activeScroll === null) {
              return true;
            }

            return target.id === this.activeScroll;
          }),
          map((target) => {
            this.activeScroll = target.id;
            if (target.id === 'mirror') {
              this.mirrors()
                .find((x) => x.getElementRef().nativeElement.id === 'base')
                ?.scrollTo({ left: Math.abs(target.scrollLeft) });
            } else {
              this.mirrors()
                .find((x) => x.getElementRef().nativeElement.id === 'mirror')
                ?.scrollTo({ right: Math.abs(target.scrollLeft) });
            }
            setTimeout(() => (this.activeScroll = null), 0);
          }),
        )
        .subscribe();
    });
  }
}
