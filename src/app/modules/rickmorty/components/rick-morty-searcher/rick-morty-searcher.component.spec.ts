import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortySearcherComponent } from './rick-morty-searcher.component';

describe('RickMortySearcherComponent', () => {
  let component: RickMortySearcherComponent;
  let fixture: ComponentFixture<RickMortySearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickMortySearcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickMortySearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
