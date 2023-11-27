import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./front/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },    
 
  {
    path: 'register',
    loadChildren: () => import('./front/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'breeds',
    loadChildren: () => import('./breeds/breeds.module').then( m => m.BreedsPageModule)
  },
  {
    path: 'dog-home',
    loadChildren: () => import('./breeds/dog/dog-home/dog-home.module').then( m => m.DogHomePageModule)
  },
  {
    path: 'dog-details/:id',
    loadChildren: () => import('./breeds/dog/dog-details/dog-details.module').then( m => m.DogDetailsPageModule)
  },
  { path: 'dog-update/:id',loadChildren: () => import('./breeds/dog/dog-update/dog-update.module').then( m => m.DogUpdatePageModule)},
  { path: 'dog-add', loadChildren: () => import('./breeds/dog/dog-add/dog-add.module').then( m => m.DogAddPageModule)},
  { path: 'cat-home',loadChildren: () => import('./breeds/cat/cat-home/cat-home.module').then( m => m.CatHomePageModule)},
  { path: 'cat-add', loadChildren: () => import('./breeds/cat/cat-add/cat-add.module').then( m => m.CatAddPageModule)},
  { path: 'cat-details/:id',loadChildren: () => import('./breeds/cat/cat-details/cat-details.module').then( m => m.CatDetailsPageModule)},
  { path: 'cat-update/:id', loadChildren: () => import('./breeds/cat/cat-update/cat-update.module').then( m => m.CatUpdatePageModule)},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  { path: 'dog-info/:id',loadChildren: () => import('./breeds/dog/dog-info/dog-info.module').then( m => m.DogInfoPageModule)},
  { path: 'dog-med/:id', loadChildren: () => import('./breeds/dog/dog-med/dog-med.module').then( m => m.DogMedPageModule)},
  { path: 'dog-food/:id',loadChildren: () => import('./breeds/dog/dog-food/dog-food.module').then( m => m.DogFoodPageModule)},
  { path: 'dog-hair/:id',loadChildren: () => import('./breeds/dog/dog-hair/dog-hair.module').then( m => m.DogHairPageModule)},
  { path: 'dog-activity/:id', loadChildren: () => import('./breeds/dog/dog-activity/dog-activity.module').then( m => m.DogActivityPageModule)},
  { path: 'cat-info/:id', loadChildren: () => import('./breeds/cat/cat-info/cat-info.module').then( m => m.CatInfoPageModule)},
  { path: 'cat-food/:id', loadChildren: () => import('./breeds/cat/cat-food/cat-food.module').then( m => m.CatFoodPageModule)},
  { path: 'cat-med/:id',loadChildren: () => import('./breeds/cat/cat-med/cat-med.module').then( m => m.CatMedPageModule)},
  { path: 'cat-vac', loadChildren: () => import('./breeds/cat/cat-vac/cat-vac.module').then( m => m.CatVacPageModule)},
  {
    path: 'onboarding',
    loadChildren: () => import('./onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  }
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
