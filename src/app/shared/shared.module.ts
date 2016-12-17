import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { RouterModule } from '@angular/router';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
import {NotesComponent} from './notes/notes.component';

@NgModule({
  declarations: [
    TopNavigationComponent,
    SubNavigationComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopNavigationComponent,
    SubNavigationComponent,
    NotesComponent
  ]
})
export class SharedModule {}
