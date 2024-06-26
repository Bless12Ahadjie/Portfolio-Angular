import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIntouchComponent } from './get-intouch.component';

describe('GetIntouchComponent', () => {
  let component: GetIntouchComponent;
  let fixture: ComponentFixture<GetIntouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetIntouchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetIntouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
