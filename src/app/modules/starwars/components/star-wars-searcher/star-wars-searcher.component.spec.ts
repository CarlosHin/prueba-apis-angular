import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsSearcherComponent } from './star-wars-searcher.component';

describe('StarWarsSearcherComponent', () => {
  let component: StarWarsSearcherComponent;
  let fixture: ComponentFixture<StarWarsSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarsSearcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
