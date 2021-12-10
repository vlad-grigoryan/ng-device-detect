import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { NgDeviceDetectService } from '../../../ng-device-detect/src/lib/ng-device-detect.service';
import { AppComponent } from './app.component';
import { KeysPipe } from './pipes/keys.pipe';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: any;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [AppComponent, KeysPipe],
        providers: [NgDeviceDetectService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it(
    'should create the app',
    waitForAsync(() => {
      expect(app).toBeTruthy();
    })
  );

  it(
    'should render demo heading in an element having class demo-heading-text',
    waitForAsync(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.demo-heading-text').textContent).toContain('ng-device-detect');
    })
  );

  it(
    'should render device information inside table in <tr> tags ',
    waitForAsync(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('table tr.info-item').length).toEqual(11); // all the 6 required properties
    })
  );
});
