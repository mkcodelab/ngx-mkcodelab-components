import { Component, inject, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ModalComponent,
  ModalConfig,
  ModalService,
  RadialMenuComponent,
} from 'ngx-mkcodelab-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent, RadialMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'showcase';
  radialMenuOpen = false;

  modalSvc = inject(ModalService);

  openModal(template: TemplateRef<any>, config: ModalConfig) {
    this.modalSvc.open(template, config);
  }

  //   move it to the library (to component)
  get isModalOpen() {
    return this.modalSvc.isOpen;
  }

  toggleRadialMenu(to: boolean) {
    console.log('toggled', to);
    this.radialMenuOpen = to;
  }
}
