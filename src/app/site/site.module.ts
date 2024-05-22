import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SiteRoutingModule } from './site-routing.module';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { HomeComponent } from './home/home/home.component';
 import { IntroductionComponent } from '../components/site/introduction/introduction.component';
import { AboutUsComponent } from './about-us/about-us.component';

 
  
  

const antdModule= [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    NzCheckboxModule
]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        SiteRoutingModule,
        ...antdModule
    ],
    declarations: [
      
        HomeComponent,IntroductionComponent, AboutUsComponent       
    ]
})

export class SiteModule {}