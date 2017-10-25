import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TestComponent} from './test-component/test-component.component';
import {TestComponent as TestComp} from './test-comp/test-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestComp,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
