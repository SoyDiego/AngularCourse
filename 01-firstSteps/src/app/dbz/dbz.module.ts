import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';
import { FormAddCharacterComponent } from './form-add-character/form-add-character.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [MainPageComponent, CharactersComponent, FormAddCharacterComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
  providers: [DbzService],
})
export class DbzModule {}
