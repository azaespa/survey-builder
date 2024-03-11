import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, SurveyFormComponent, FormBuilderComponent],
  imports: [BrowserModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
