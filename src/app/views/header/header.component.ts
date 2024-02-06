import { Component } from '@angular/core';
import { MockLink, links } from './mockLinks';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links$: Observable<MockLink[]> = of(links);
}
