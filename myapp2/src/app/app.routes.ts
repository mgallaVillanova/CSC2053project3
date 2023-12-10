import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CuisineTabsComponent } from './cuisine-tabs/cuisine-tabs.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

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


