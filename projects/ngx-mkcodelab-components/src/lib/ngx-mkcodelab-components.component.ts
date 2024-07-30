import { Component } from '@angular/core';

@Component({
  selector: 'mkcodelab-components',
  standalone: true,
  imports: [],
  template: `
    <p>
      mkcodelab-components works!
      {{ numValue }}
    </p>
  `,
  styles: ``,
})
export class NgxMkcodelabComponentsComponent {
  numValue = 200;
}
