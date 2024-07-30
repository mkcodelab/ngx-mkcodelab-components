import { Component, inject, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ModalComponent,
  ModalConfig,
  ModalService,
  NgxMkcodelabComponentsComponent,
} from 'ngx-mkcodelab-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxMkcodelabComponentsComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'showcase';

  modalSvc = inject(ModalService);

  openModal(template: TemplateRef<any>, config: ModalConfig) {
    this.modalSvc.open(template, config);
  }

  //   move it to the library (to component)
  get isModalOpen() {
    return this.modalSvc.isOpen;
  }
}
