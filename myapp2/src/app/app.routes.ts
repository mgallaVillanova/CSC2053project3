import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home-component/home-component.component';
import { CuisineTabsComponent } from './cuisine-tabs-component/cuisine-tabs-component.component';
import { RecipeDetailsComponent } from './recipe-details-component/recipe-details-component.component';

export const routes: Routes = [
    { path: '', component: HomeComponent}
    { path: 'cuisine/:type', component: CuisineTabsComponent },
    { path: 'recipe/:id', component: RecipeDetailsComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}


