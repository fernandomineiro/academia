import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'page/:id',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pre-login',
    loadChildren: () => import('./pages/pre-login/pre-login.module').then( m => m.PreLoginPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./pages/slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'testfree',
    loadChildren: () => import('./pages/testfree/testfree.module').then( m => m.TestfreePageModule)
  },
  {
    path: 'testconfirmed',
    loadChildren: () => import('./pages/testconfirmed/testconfirmed.module').then( m => m.TestconfirmedPageModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./pages/data/data.module').then( m => m.DataPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'myaccount',
    loadChildren: () => import('./pages/myaccount/myaccount.module').then( m => m.MyaccountPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'personal-online',
    loadChildren: () => import('./pages/personal-online/personal-online.module').then( m => m.PersonalOnlinePageModule)
  },
  {
    path: 'round',
    loadChildren: () => import('./pages/round/round.module').then( m => m.RoundPageModule)
  },
  {
    path: 'body',
    loadChildren: () => import('./pages/body/body.module').then( m => m.BodyPageModule)
  },
  {
    path: 'conquest',
    loadChildren: () => import('./pages/conquest/conquest.module').then( m => m.ConquestPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/video/video.module').then( m => m.VideoPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
