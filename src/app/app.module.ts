import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WineListComponent } from './views/wine-list/wine-list.component';
import { HttpClientModule } from '@angular/common/http';
import { WineListService } from './services/wine-list.service';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    WineListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [
    WineListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
