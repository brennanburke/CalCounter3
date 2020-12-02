import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodDiaryPage } from './food-diary.page';

describe('FoodDiaryPage', () => {
  let component: FoodDiaryPage;
  let fixture: ComponentFixture<FoodDiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodDiaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodDiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
