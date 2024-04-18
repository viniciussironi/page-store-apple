import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksRapidosComponent } from './links-rapidos.component';

describe('LinksRapidosComponent', () => {
  let component: LinksRapidosComponent;
  let fixture: ComponentFixture<LinksRapidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksRapidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinksRapidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
