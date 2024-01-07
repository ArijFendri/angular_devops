import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefilmComponent } from './listefilm.component';

describe('ListefilmComponent', () => {
  let component: ListefilmComponent;
  let fixture: ComponentFixture<ListefilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListefilmComponent]
    });
    fixture = TestBed.createComponent(ListefilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
