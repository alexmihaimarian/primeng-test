import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UIMessage } from 'primeng/components/message/message';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InfoCircleIcon } from 'primeng/components/icons/infocircle';
import { ExclamationTriangleIcon } from 'primeng/components/icons/exclamationtriangle';
import { TimesCircleIcon } from 'primeng/components/icons/timescircle';
import { CheckIcon } from 'primeng/components/icons/check';

describe('UIMessage', () => {
    let message: UIMessage;
    let fixture: ComponentFixture<UIMessage>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, InfoCircleIcon, ExclamationTriangleIcon, TimesCircleIcon, CheckIcon],
            declarations: [UIMessage]
        });

        fixture = TestBed.createComponent(UIMessage);
        message = fixture.componentInstance;
    });

    it('should change severity to success and text', () => {
        message.severity = 'success';
        message.text = 'Primeng Rocks!';
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('div'));
        const iconEl = fixture.debugElement.query(By.css('.p-inline-message-icon'));
        const textEl = fixture.debugElement.query(By.css('.p-inline-message-text'));
        expect(messageEl.nativeElement).toBeTruthy();
        expect(messageEl.nativeElement.className).toContain('p-inline-message-success');
        expect(iconEl.nativeElement.parentElement.tagName.toLowerCase()).toEqual('checkicon');
        expect(textEl.nativeElement.textContent).toContain('Primeng Rocks!');
    });

    it('should change severity to info', () => {
        message.severity = 'info';
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('div'));
        const iconEl = fixture.debugElement.query(By.css('.p-inline-message-icon'));
        expect(messageEl.nativeElement).toBeTruthy();
        expect(messageEl.nativeElement.className).toContain('p-inline-message-info');
        expect(iconEl.nativeElement.parentElement.tagName.toLowerCase()).toEqual('infocircleicon');
    });

    it('should change severity to error', () => {
        message.severity = 'error';
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('div'));
        const iconEl = fixture.debugElement.query(By.css('.p-inline-message-icon'));
        expect(messageEl.nativeElement).toBeTruthy();
        expect(messageEl.nativeElement.className).toContain('p-inline-message-error');
        expect(iconEl.nativeElement.parentElement.tagName.toLowerCase()).toEqual('timescircleicon');
    });

    it('should change severity to warning', () => {
        message.severity = 'warn';
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('div'));
        const iconEl = fixture.debugElement.query(By.css('.p-inline-message-icon'));
        expect(messageEl.nativeElement).toBeTruthy();
        expect(messageEl.nativeElement.className).toContain('p-inline-message-warn');
        expect(iconEl.nativeElement.parentElement.tagName.toLowerCase()).toEqual('exclamationtriangleicon');
    });
    it('should change severity to default', () => {
        message.severity = ' ';
        fixture.detectChanges();

        const messageEl = fixture.debugElement.query(By.css('div'));
        const iconEl = fixture.debugElement.query(By.css('.p-inline-message-icon'));
        expect(messageEl.nativeElement).toBeTruthy();
        expect(iconEl.nativeElement.parentElement.tagName.toLowerCase()).toEqual('infocircleicon');
    });
});
