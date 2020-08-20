import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WineListComponent } from './wine-list.component';
import { WineListService } from 'src/app/services/wine-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WineListComponent', () => {
  let component: WineListComponent;
  let fixture: ComponentFixture<WineListComponent>;
  let h2: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ WineListComponent ],
      providers: [WineListService,]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineListComponent);
    component = fixture.componentInstance;
    h2 = fixture.nativeElement.querySelector('h2');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original title', () =>{
    fixture.detectChanges();
    expect(h2.textContent).toContain(component.title);
  })

  it('should display updated title after detectChanges', () => {
    component.title = 'Change Title';
    fixture.detectChanges();
    expect(h2.textContent).toContain(component.title);
  });

});
