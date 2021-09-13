import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatematicoComponent } from './matematico/matematico.component';
import { MatematicoResultComponent } from './matematico-result/matematico-result.component';


@NgModule({
  declarations: [
    AppComponent,
    MatematicoComponent,
    MatematicoResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
