import { CommonModule } from '@angular/common';

import { MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PersonagensListaComponent } from './personagens-lista.component';
import { PersonagensComponent } from './personagens/personagens.component';

import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';




@NgModule({
    declarations:[
        PersonagensListaComponent,       
        PersonagensComponent                          
    ],

    imports:[
        CommonModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        FlexLayoutModule,
        SharedModule,
        RouterModule
    ],
    exports:[]   
})

export class PersonagensListaModule{}