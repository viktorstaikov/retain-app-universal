/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent, providers, routes } from './index';
import { AppBarComponent, ColorPickerComponent, NoteCardComponent, NoteCreatorComponent } from './ui';
import { AboutComponent, AuthComponent, MainComponent, NotesComponent } from './containers';
// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app/app.routing';

/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [AppComponent],
  /** Our Components */
  declarations: [AppComponent, AppBarComponent, ColorPickerComponent, NoteCardComponent, NoteCreatorComponent,
    AboutComponent, AuthComponent, MainComponent, NotesComponent],
  imports: [
    /**
     * NOTE: Needs to be your first import (!)
     * NodeModule, NodeHttpModule, NodeJsonpModule are included
     */
    UniversalModule,
    FormsModule,
    // routes
    RouterModule.forRoot(routes)
    /**
     * using routes
     */
    // RouterModule.forRoot(appRoutes)
  ],
  providers: providers
})
export class AppModule {

}
