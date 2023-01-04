import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponentComponent } from './components/demo-component/demo-component.component';
import { DataPassingComponent } from './components/data-passing/data-passing.component';
import { SharedDataService } from './services/shared-data.service';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipePipe } from './components/filter-pipe.pipe';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    DataPassingComponent,
    DataBindingComponent,
    FilterPipePipe,
    CustomDropdownComponent,
    ErrorComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
