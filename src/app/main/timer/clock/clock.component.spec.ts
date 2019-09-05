import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockComponent } from './clock.component';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TimeSecondsFormatPipe } from 'src/app/shared/pipes/time-seconds-format/time-seconds-format.pipe';

describe('ClockComponent', () => {
  let component: ClockComponent;
  let compiled: any;
  let fixture: ComponentFixture<ClockComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClockComponent,
        TimeSecondsFormatPipe
      ],
      imports: [
        FormsModule,
        NgbModule.forRoot(),
        NgbTimepickerModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Component test', ()=>{
    it('should have title "Timer 80% 20%"', () => {
      var title:HTMLElement = compiled.querySelector('#titleId');
      expect(title.textContent.trim()).toBe('Timer 80% 20%');
    });
  
    it('should have sub-title "The Pareto principle - also known as the 80/20 rule"', () => {
      var title:HTMLElement = compiled.querySelector('#subTitleId');
      expect(title.textContent.trim()).toBe('The Pareto principle - also known as the 80/20 rule');
    });
  
    it('should have description "Roughly 80% of the effects come from 20% of the causes."', () => {
      var title:HTMLElement = compiled.querySelector('#descriptionId');
      expect(title.textContent.trim()).toBe('Roughly 80% of the effects come from 20% of the causes.');
    });
  })
});
