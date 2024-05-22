import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
 
 
 
const routes: Routes = [
     
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Home'
        }
    },
    {
        path: 'about-us',
        component: AboutUsComponent,
        data: {
            title: 'Home'
        }
    },
   
    
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SiteRoutingModule { }
