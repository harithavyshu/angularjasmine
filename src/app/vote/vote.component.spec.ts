import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';
import { DebugElement } from "@angular/core";/*allows to work with view of component*/
import { By } from "@angular/platform-browser";/*alllows to work with elements in the view*/
describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  let debugElement: DebugElement
  let htmlElement: HTMLElement


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoteComponent]
    })
      .compileComponents();
  }));

 
  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('h1'))
    htmlElement = debugElement.nativeElement
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial number of vote', () => {
    const initialVotes = component.totalVotes
    component.upVote()
    fixture.detectChanges()
    const newVotes = component.totalVotes

    expect(newVotes).toBeGreaterThan(initialVotes)
  })


  
  it('should display upvoted number(current vote = 0), after being upvoted', () => {
  component.upVote();
  fixture.detectChanges();
  expect(htmlElement.textContent).toBe('Votes:1');
  })
  
  it('should display downvoted number(current vote = 0), after being downvoted', () => {
  component.downVote();
  fixture.detectChanges();
  expect(htmlElement.textContent).toBe('Votes:-1');
  }) 
   
  


});
