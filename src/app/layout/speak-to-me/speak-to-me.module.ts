import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeakToMeRoutingModule } from './speak-to-me-routing.module';
import { SpeakToMeComponent } from './speak-to-me.component';
import {ShareUiModule} from '../../share/ui/share-ui.module';
import { PublicConfideComponent } from './public-confide/public-confide.component';
import { PrivateConfideComponent } from './private-confide/private-confide.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SpeakToMeComponent,
    PublicConfideComponent,
    PrivateConfideComponent,
  ],
  imports: [
    CommonModule,
    SpeakToMeRoutingModule,
    ShareUiModule,
    ReactiveFormsModule
  ]
})
export class SpeakToMeModule { }