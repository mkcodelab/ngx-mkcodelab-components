import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMkcodelabComponentsComponent } from './ngx-mkcodelab-components.component';

describe('NgxMkcodelabComponentsComponent', () => {
  let component: NgxMkcodelabComponentsComponent;
  let fixture: ComponentFixture<NgxMkcodelabComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMkcodelabComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxMkcodelabComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
