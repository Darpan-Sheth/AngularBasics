import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpServiceService } from './providers/http-service.service';
import { SearchService } from './providers/search.service';
import { AppSettingsService } from './providers/app-settings.service';
import { LocalStorageServiceService } from './providers/local-storage-service.service';
import { HttpModule } from '../../node_modules/@angular/http';
import { FormsModule } from '@angular/forms';
import { EventFormComponent } from './pages/event-form/event-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgbModule,
    FormsModule
  ],
  providers: [HttpServiceService, 
              SearchService,
              AppSettingsService,
              LocalStorageServiceService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
