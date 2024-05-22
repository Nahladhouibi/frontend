import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

 
import { Login3Component } from './login-3/login-3.component';
 
import { SignUp3Component } from './sign-up-3/sign-up-3.component';
import { Login1Component } from './login-1/login-1.component';
import { SignUp1Component } from './sign-up-1/sign-up-1.component';
import { AuthenticationService } from '../shared/services/authentication.service';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageService } from 'ng-zorro-antd/message';
 

const antdModule= [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    NzCheckboxModule,
    NzSelectModule
]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule,
        ...antdModule
    ],
    declarations: [
      
        Login3Component,
        Login1Component,
        SignUp1Component,
        SignUp3Component,
       
    ],
    providers:[AuthenticationService ,NzMessageService]
})

export class AuthenticationModule {}