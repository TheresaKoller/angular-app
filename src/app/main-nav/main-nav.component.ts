import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
selector: 'app-main-nav',
templateUrl: './main-nav.component.html',
styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
.pipe(
map(result => result.matches),
shareReplay()
);

constructor(private breakpointObserver: BreakpointObserver) {}

/*ClickAlert() {
alert("Why did you do that!");
}*/



}



