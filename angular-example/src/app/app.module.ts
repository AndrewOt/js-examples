import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './ListItem/listItem.component';

// This is where we register all of our components into a module. Modules are made up of components.
// This is also where the root component is specified (in the boostrap array).

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
