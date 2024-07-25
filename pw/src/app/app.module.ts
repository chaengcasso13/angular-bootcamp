import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { LetterheadComponent } from './components/letterhead/letterhead.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterheadComponent
  ],
  imports: [
    BrowserModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
