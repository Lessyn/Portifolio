import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { BotaoLoadComponent } from './components/botao-load/botao-load.component';
import { CardComponent } from './components/card/card.component';
import { FiltroInputComponent } from './components/filtro-input/filtro-input.component';
import { FiltroSelectComponent } from './components/filtro-select/filtro-select.component';



@NgModule({
    declarations: [
        FiltroSelectComponent,
        BotaoLoadComponent,
        CardComponent,
        FiltroInputComponent
    ],
    imports: [
        CommonModule,
        MatOptionModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        FormsModule
    ],
    exports: [
        FiltroSelectComponent,
        BotaoLoadComponent,
        CardComponent,
        FiltroInputComponent
    ],    
})
export class SharedModule { }