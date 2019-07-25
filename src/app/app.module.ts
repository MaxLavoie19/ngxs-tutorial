import { ReadComponent } from './components/read/read.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialState } from './state/tutorial.state';
import { NgxsModule } from '@ngxs/store';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      TutorialState
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
