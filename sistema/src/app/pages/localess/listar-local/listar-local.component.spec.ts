import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLocalComponent } from './listar-local.component';

describe('ListarLocalComponent', () => {
  let component: ListarLocalComponent;
  let fixture: ComponentFixture<ListarLocalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLocalComponent]
    });
    fixture = TestBed.createComponent(ListarLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
